import _ from 'lodash';

const compareData = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keysUnion = _.sortBy(_.union(keys1, keys2));
  const result = keysUnion.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { name: key, type: 'nested', children: compareData(value1, value2) };
    }
    if (value1 === value2) {
      return { name: key, type: 'unchanged', value: value1 };
    }
    if (!_.has(data2, key)) {
      return { name: key, type: 'deleted', deleted: data1[key] };
    }
    if (!_.has(data1, key)) {
      return { name: key, type: 'added', added: data2[key] };
    }
    return {
      name: key, type: 'changed', deleted: value1, added: value2,
    };
  });
  return result;
};

export default compareData;
