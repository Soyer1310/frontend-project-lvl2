import _ from 'lodash';

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
      const isDeletedString = (typeof item.deleted === 'string') ? `'${item.deleted}'` : item.deleted;
      const deleted = (_.isObject(item.deleted)) ? '[complex value]' : isDeletedString;
      const isAddedString = (typeof item.added === 'string') ? `'${item.added}'` : item.added;
      const added = (_.isObject(item.added)) ? '[complex value]' : isAddedString;
      if (item.type === 'changed') {
        return `Property '${previousKey}.${key}' was updated. From ${deleted} to ${added}\n`;
      }

      if (item.type === 'deleted' && previousKey !== '') {
        return `Property '${previousKey}.${key}' was removed\n`;
      }
      if (item.type === 'deleted') {
        return `Property '${key}' was removed\n`;
      }

      if (item.type === 'added' && previousKey !== '') {
        return `Property '${previousKey}.${key}' was added with value: ${added}\n`;
      }
      if (item.type === 'added') {
        return `Property '${key}' was added with value: ${added}\n`;
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
