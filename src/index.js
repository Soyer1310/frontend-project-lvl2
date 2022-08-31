import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';
import compareFiles from './compareFiles.js';
import formatted from './formatters/index.js';

const getData = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  const dataType = path.extname(filePath).slice(1);
  return parsers(data, dataType);
};

const genPath = (processedPath) => {
  const currentDir = process.cwd();
  return path.resolve(currentDir, processedPath);
};

export default (filepath1, filepath2, format) => {
  const file1 = getData(genPath(filepath1));
  const file2 = getData(genPath(filepath2));
  const diff = compareFiles(file1, file2);
  const formatedDiff = formatted(diff, format);
  const lastChar = formatedDiff[formatedDiff.length - 1];
  if (lastChar === '\n') {
    return formatedDiff.slice(0, formatedDiff.length - 1);
  }
  return formatedDiff;
};
