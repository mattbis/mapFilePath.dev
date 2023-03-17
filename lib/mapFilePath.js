const fs = require('fs').promises;
const { stdin, stdout } = require('node:process');

async function mapFilePath(filePath) {
  try {
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      const files = await fs.readdir(filePath);
      const mappingPromises = files.map(async (file) => {
        const subPath = `${filePath}/${file}`;
        try {
          const mapping = await mapFilePath(subPath);
          return mapping;
        } catch (error) {
          return { [subPath]: error.toString() };
        }
      });

      const mappingArray = await Promise.all(mappingPromises);
      const mapping = {};

      mappingArray.forEach((mappingItem) => {
        Object.assign(mapping, mappingItem);
      });

      return mapping;
    } else {
      return { [filePath]: stats };
    }
  } catch (error) {
    return { [filePath]: error.toString() };
  }
}

if (require.main === module) {
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', async (data) => {
    const filePath = data.trim();

    try {
      const mapping = await mapFilePath(filePath);
      const flatMapping = {};

      Object.keys(mapping).forEach((key) => {
        if (typeof mapping[key] === 'object') {
          Object.assign(flatMapping, mapping[key]);
        } else {
          flatMapping[key] = mapping[key];
        }
      });

      stdout.write(JSON.stringify(flatMapping));
    } catch (error) {
      stdout.write(JSON.stringify({ [filePath]: error.toString() }));
    }
  });
  console.info('require.main')
}

module.exports = { mapFilePath };
