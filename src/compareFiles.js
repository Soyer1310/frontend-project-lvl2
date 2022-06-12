import _ from 'lodash';
import genString from './genString.js';

export default (file1, file2) => {
  let diffString = '{\n';
  const keis1 = _.keys(file1);
  const keis2 = _.keys(file2);
  const assignedKeis = _.sortBy(_.union(keis1, keis2));
  console.log(assignedKeis);
  assignedKeis.forEach((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (value1 === value2) {
      diffString += `   ${genString(key, value1)}`;
    } else if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
      diffString += `  -${genString(key, value1)}`;
      diffString += `  +${genString(key, value2)}`;
    } else if (Object.hasOwn(file1, key)) {
      diffString += `  -${genString(key, value1)}`;
    } else if (Object.hasOwn(file2, key)) {
      diffString += `  +${genString(key, value2)}`;
    }
  });
  diffString += '}';
  return diffString;
};
