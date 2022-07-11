import _ from 'lodash';
import readFile from './src/readFile.js';
import genPath from './src/genPath.js';
import compareFiles from './src/compareFiles.js';
import formatted from './src/formatters/index.js';

export default (filepath1, filepath2, format) => {
  const file1 = readFile(genPath(filepath1));
  const file2 = readFile(genPath(filepath2));
  const diff = compareFiles(file1, file2);
  let currentFormat = format;
  if(_.isObject(format)) {
    currentFormat = format.format;
  }
  const formatedDiff = formatted(diff, currentFormat);
  return formatedDiff;
};
