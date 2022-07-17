import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parsers from './src/parsers.js';
import compareFiles from './src/compareFiles.js';
import formatted from './src/formatters/index.js';
import { cwd } from 'process';

const readFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const format = path.extname(filePath);
  return parsers(content, format);
};

const genPath = (processedPath) => {
  const currentDir = cwd();
  return path.resolve(currentDir, processedPath);
};

export default (filepath1, filepath2, format) => {
  const file1 = readFile(genPath(filepath1));
  const file2 = readFile(genPath(filepath2));
  const diff = compareFiles(file1, file2);
  let currentFormat = format;
  if (_.isObject(format)) {
    currentFormat = format.format;
  }
  const formatedDiff = formatted(diff, currentFormat);
  return formatedDiff;
};
