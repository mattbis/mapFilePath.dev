#!/usr/bin/env node

const minimist = require('minimist')
const mapFilePath = require('./mapFilePath.recursive.cjs')

async function main() {
  const args = minimist(process.argv.slice(2))
  const filePath = args._[0]

  if (!filePath) {
    console.error('Please provide a file path as an argument.')
    process.exit(1)
  }

  const results = await mapFilePath(filePath)

  console.log(results)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
