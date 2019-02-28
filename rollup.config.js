const createConfig = require('./rollup.config.main')
const pkg = require('./package.json')

const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const removeExt = file => file.replace(/\.[^.]+$/, '')

const isDirectory = source => lstatSync(source).isDirectory()

const getIndex = dir =>
  join(dir, readdirSync(dir).find(file => /^index/.test(file)))

const getFiles = dir => {
  console.log('XXXX', dir)
  return readdirSync(dir)
    .filter(file => !/^_/.test(file))
    .reduce((acc, file) => {
      const path = join(dir, file)
      const finalPath = isDirectory(path) ? getIndex(path) : path
      return {
        ...acc,
        [removeExt(file)]: finalPath
      }
    }, {})
}

export default createConfig({ pkg, input: 'src/index.ts', umd: true })
