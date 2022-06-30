import _ from 'lodash';

const stylish = (diff, spacesCount = 2) => {
  if (!_.isObject(diff)) {
    return diff;
  }
  const currentIndent = ' '.repeat(spacesCount);
  const bracketIndent = ' '.repeat(spacesCount - 2);
  const lines = Object.entries(diff).map(node => {
    const [ key, value ] = node;
    if(value.children) {
     return `${currentIndent}  ${key}: ${stylish(value.children, spacesCount + 4)}`;
    }
    if(value.type === 'same') {
     return `${currentIndent}  ${key}: ${stylish(value.value, spacesCount + 4)}`;
    } else if(value.type === 'different') {
      return `${currentIndent}- ${key}: ${stylish(value.deleted, spacesCount + 4)}\n${currentIndent}+ ${key}: ${stylish(value.added, spacesCount + 4)}`;
    } else if(value.type === 'first') {
      return `${currentIndent}- ${key}: ${stylish(value.deleted, spacesCount + 4)}`;
    } else if (value.type === 'second') {
      return `${currentIndent}+ ${key}: ${stylish(value.added, spacesCount + 4)}`;
    }
    return `${currentIndent}  ${key}: ${stylish(value, spacesCount + 4)}`;
  });
  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

export default stylish;