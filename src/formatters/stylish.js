import _ from 'lodash';

const genIndent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const stringify = (data, depth, spacesCount = 4) => {
  if (!_.isPlainObject(data)) {
    return data;
  }
  const indent = genIndent(depth);
  const bracketIndent = ' '.repeat(spacesCount * (depth - 1));
  const lines = Object.entries(data).map((node) => {
    const [key, value] = node;
    return `  ${indent}${key}: ${stringify(value, depth + 1)}`;
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
    const indent = genIndent(depth);
    const bracketIndent = ' '.repeat(spacesCount * (depth - 1));
    const lines = value.map((node) => {
      const key = node.name;
      if (node.type === 'nested') {
        return `  ${indent}${key}: ${iter(node.children, depth + 1)}`;
      }
      if (node.type === 'unchanged') {
        return `  ${indent}${key}: ${stringify(node.value, depth + 1)}`;
      } if (node.type === 'changed') {
        return `${indent}- ${key}: ${stringify(node.deleted, depth + 1)}\n${indent}+ ${key}: ${stringify(node.added, depth + 1)}`;
      } if (node.type === 'deleted') {
        return `${indent}- ${key}: ${stringify(node.deleted, depth + 1)}`;
      } if (node.type === 'added') {
        return `${indent}+ ${key}: ${stringify(node.added, depth + 1)}`;
      }
      throw new Error(`Unknown type: '${node.type}'!`);
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
