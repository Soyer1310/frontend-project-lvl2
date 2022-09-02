import _ from 'lodash';

const stringify = (obj, depth, spacesCount = 4) => {
  if (!_.isPlainObject(obj)) {
    return obj;
  }
  const currentIndent = ' '.repeat(spacesCount * depth);
  const bracketIndent = ' '.repeat(spacesCount * depth - spacesCount);
  const lines = Object.entries(obj).map((node) => {
    const [key, value] = node;
    return `${currentIndent}${key}: ${stringify(value, depth + 1)}`;
  });
  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

const stylish = (diff, spacesCount = 4) => {
  const iter = (value, depth) => {
    if (!_.isArray(value) && !_.isPlainObject(value)) {
      return value;
    }
    const currentIndent = ' '.repeat(spacesCount * depth);
    const specialIndent = ' '.repeat(spacesCount * depth - 2);
    const bracketIndent = ' '.repeat(spacesCount * depth - spacesCount);
    const lines = value.map((node) => {
      const key = node.name;
      if (node.type === 'nested') {
        return `${currentIndent}${key}: ${iter(node.children, depth + 1)}`;
      }
      if (node.type === 'unchanged') {
        return `${currentIndent}${key}: ${stringify(node.value, depth + 1)}`;
      } if (node.type === 'changed') {
        return `${specialIndent}- ${key}: ${stringify(node.deleted, depth + 1)}\n${specialIndent}+ ${key}: ${stringify(node.added, depth + 1)}`;
      } if (node.type === 'deleted') {
        return `${specialIndent}- ${key}: ${stringify(node.deleted, depth + 1)}`;
      } if (node.type === 'added') {
        return `${specialIndent}+ ${key}: ${stringify(node.added, depth + 1)}`;
      }
      return `${currentIndent}  ${key}: ${stringify(node, depth + 1)}`;
    });
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };
  return iter(diff, 1);
};

export default stylish;
