import readFile from './readFile.js';
import genPath from './genPath.js';
import compareFiles from './compareFiles.js';
import formatted from '../formatters/index.js'

export default (filepath1, filepath2, format) => {
  const file1 = readFile(genPath(filepath1));
  const file2 = readFile(genPath(filepath2));
  const diff = compareFiles(file1, file2);
  const formatedDiff = formatted(diff, format);
  return formatedDiff;
};
