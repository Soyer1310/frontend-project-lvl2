#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';
import stylish from '../src/stylish.js'

const program = new Command();
let result;
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1>')
  .arguments('<filepath1>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    result = genDiff(filepath1, filepath2)
  });
program.parse();

const options = program.opts();
if (options.format) {
  console.log(stylish(result));
}