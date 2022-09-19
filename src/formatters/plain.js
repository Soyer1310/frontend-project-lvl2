import _ from 'lodash';

const stringify = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }

  if (_.isObject(value)) {
    return '[complex value]';
  }

  return value;
};

const plain = (diff) => {
  const iter = (node, previousKey) => {
    const lines = node.map((item) => {
      const key = `${previousKey}${item.name}`;
      if (item.type === 'nested') {
        return iter(item.children, `${key}.`);
      }
      if (item.type === 'changed') {
        return `Property '${previousKey}${item.name}' was updated. From ${stringify(item.deleted)} to ${stringify(item.added)}\n`;
      }
      if (item.type === 'deleted') {
        return `Property '${previousKey}${item.name}' was removed\n`;
      }
      if (item.type === 'added') {
        return `Property '${previousKey}${item.name}' was added with value: ${stringify(item.added)}\n`;
      }
      return null;
    });
    return [
      ...lines,
    ].join('');
  };
  const result = iter(diff, '');
  return result.slice(0, result.length - 1);
};

export default plain;
