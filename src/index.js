import readFile from './readFile.js';
import genPath from './genPath.js';
import compareFiles from './compareFiles.js';

export default (filepath1, filepath2) => {
  const file1 = readFile(genPath(filepath1));
  const file2 = readFile(genPath(filepath2));
  const diffStr = compareFiles(file1, file2);
  return diffStr;
};
