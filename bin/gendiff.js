#!/usr/bin/env node
import { Command } from 'commander';
import plain from '../formatters/plain.js';
import genDiff from '../src/index.js';
import stylish from '../formatters/stylish.js';

const program = new Command();
let diff;
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1>')
  .arguments('<filepath1>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    diff = genDiff(filepath1, filepath2);
  });
program.parse();

const options = program.opts();
if (options.format === 'stylish') {
  console.log(stylish(diff));
} else if (options.format === 'plain') {
  console.log(plain(diff));
}
