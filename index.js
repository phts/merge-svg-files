#!/usr/bin/env node

const svgstore = require('svgstore')
const htmlclean = require('htmlclean')
const sh = require('shelljs')
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()

const sprites = svgstore()

const OUTPUT_FILE_NAME = 'sprites.svg'

const files = sh.find(cwd)
  .filter(file => file.match(/\.svg$/))
  .filter(file => !file.match(new RegExp(`${path.sep}${OUTPUT_FILE_NAME}$`)))

files.forEach(file => {
  const id = path.basename(file, '.svg')
  const contents = fs.readFileSync(file, 'utf8')
  sprites.add(id, contents)
})

const outputFile = path.join(cwd, OUTPUT_FILE_NAME)
fs.writeFileSync(outputFile, htmlclean(sprites.toString()))

console.info('Merged %s files to %s', files.length, outputFile)
