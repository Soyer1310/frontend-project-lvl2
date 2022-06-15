import _ from 'lodash';
import genString from './genString.js';

export default (file1, file2) => {
  let diffString = '{\n';
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const keysUnion = _.sortBy(_.union(keys1, keys2));
  keysUnion.forEach((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (value1 === value2) {
      diffString += `   ${genString(key, value1)}`;
    } else if (_.has(file1, key) && _.has(file2, key)) {
      diffString += `  -${genString(key, value1)}`;
      diffString += `  +${genString(key, value2)}`;
    } else if (_.has(file1, key)) {
      diffString += `  -${genString(key, value1)}`;
    } else if (_.has(file2, key)) {
      diffString += `  +${genString(key, value2)}`;
    }
  });
  diffString += '}';
  return diffString;
};
