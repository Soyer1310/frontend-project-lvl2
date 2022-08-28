import _ from 'lodash';

const stylish = (diff, spacesCount = 2) => {
  const creatObj = (obj) => {
    if (!_.isPlainObject(obj)) {
      return obj;
    }
    const currentIndent = ' '.repeat(spacesCount);
    const bracketIndent = ' '.repeat(spacesCount - 2);
    const lines = Object.entries(obj).map((node) => {
      const [key, value] = node;
      return `${currentIndent}  ${key}: ${stylish(value, spacesCount + 4)}`;
    });
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };
  if (!_.isArray(diff) && !_.isPlainObject(diff)) {
    return diff;
  }
  if (_.isPlainObject(diff)) {
    return creatObj(diff, spacesCount);
  }
  const currentIndent = ' '.repeat(spacesCount);
  const bracketIndent = ' '.repeat(spacesCount - 2);
  const lines = diff.map((node) => {
    const key = node.name;
    if (node.type === 'nested') {
      return `${currentIndent}  ${key}: ${stylish(node.children, spacesCount + 4)}`;
    }
    if (node.type === 'unchanged') {
      return `${currentIndent}  ${key}: ${stylish(node.value, spacesCount + 4)}`;
    } if (node.type === 'changed') {
      return `${currentIndent}- ${key}: ${stylish(node.deleted, spacesCount + 4)}\n${currentIndent}+ ${key}: ${stylish(node.added, spacesCount + 4)}`;
    } if (node.type === 'deleted') {
      return `${currentIndent}- ${key}: ${stylish(node.deleted, spacesCount + 4)}`;
    } if (node.type === 'added') {
      return `${currentIndent}+ ${key}: ${stylish(node.added, spacesCount + 4)}`;
    }
    return `${currentIndent}  ${key}: ${stylish(node, spacesCount + 4)}`;
  });
  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

export default stylish;
