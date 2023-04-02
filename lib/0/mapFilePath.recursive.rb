require 'find'
require 'json'

def map_file_path_recursive(path)
  results = []

  Find.find(path) do |file|
    next if File.directory?(file)

    begin
      stat = File.stat(file)
      result = {
        path: file,
        stats: {
          mode: stat.mode,
          ino: stat.ino,
          dev: stat.dev,
          nlink: stat.nlink,
          uid: stat.uid,
          gid: stat.gid,
          rdev: stat.rdev,
          size: stat.size,
          blksize: stat.blksize,
          blocks: stat.blocks,
          atime: stat.atime,
          mtime: stat.mtime,
          ctime: stat.ctime,
          birthtime: stat.birthtime
        }
      }
      results << result
    rescue
      results << { path: file, error: $!.to_s }
    end
  end

  JSON.pretty_generate(results)
end
