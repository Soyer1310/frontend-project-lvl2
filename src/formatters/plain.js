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
      if (item.type === 'nested') {
        if (previousKey === '') {
          return iter(item.children, item.name);
        }
        return iter(item.children, `${previousKey}.${item.name}`);
      }
      const key = item.name;
      if (item.type === 'changed') {
        return `Property '${previousKey}.${key}' was updated. From ${stringify(item.deleted)} to ${stringify(item.added)}\n`;
      }

      if (item.type === 'deleted' && previousKey !== '') {
        return `Property '${previousKey}.${key}' was removed\n`;
      }
      if (item.type === 'deleted') {
        return `Property '${key}' was removed\n`;
      }

      if (item.type === 'added' && previousKey !== '') {
        return `Property '${previousKey}.${key}' was added with value: ${stringify(item.added)}\n`;
      }
      if (item.type === 'added') {
        return `Property '${key}' was added with value: ${stringify(item.added)}\n`;
      }
      return null;
    });
    return [
      ...lines,
    ].join('');
  };
  return iter(diff, '');
};

export default plain;
