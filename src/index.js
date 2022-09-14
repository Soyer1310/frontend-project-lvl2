import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';
import compareData from './compareData.js';
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
  const data1 = getData(genPath(filepath1));
  const data2 = getData(genPath(filepath2));
  const diff = compareData(data1, data2);
  const formatedDiff = formatted(diff, format);
  return formatedDiff;
};
