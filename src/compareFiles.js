import _ from 'lodash';

const compareFiles = (file1, file2) => {
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const keysUnion = _.sortBy(_.union(keys1, keys2));
  const result = {};
  keysUnion.forEach((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    const node = {};
    if (_.has(file1, key) && _.has(file2, key)) {
      if (value1 === value2) {
        node.type = 'same';
        node.value = value1;
      } else {
        node.type = 'different';
        node.deleted = value1;
        node.added = value2;
      }
    }
    if (_.has(file1, key) && !_.has(file2, key)) {
      node.type = 'first';
      node.deleted = value1;
    } else if(!_.has(file1, key) && _.has(file2, key)) {
      node.type = 'second';
      node.added = value2;
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      node.children = compareFiles(value1, value2);
    }
    result[key] = node;
  });
    return result;
};

export default compareFiles;
