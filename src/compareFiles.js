import _ from 'lodash';

const compareFiles = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const keysUnion = _.sortBy(_.union(keys1, keys2));
  const result = keysUnion.map((key) => {
    if (_.has(obj1, key) && _.has(obj2, key)) {
      const value1 = obj1[key];
      const value2 = obj2[key];

      if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
        return { name: key, type: 'nested', children: compareFiles(value1, value2) };
      }
      if (value1 === value2) {
        return { name: key, type: 'unchanged', value: value1 };
      }
      return {
        name: key, type: 'changed', deleted: value1, added: value2,
      };
    }
    if (_.has(obj1, key)) {
      return { name: key, type: 'deleted', deleted: obj1[key] };
    }
    return { name: key, type: 'added', added: obj2[key] };
  });
  return result;
};

export default compareFiles;
