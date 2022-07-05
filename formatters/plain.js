import _ from 'lodash';

const plain = (diff) => {
  const iter = (node, previousKey) => {
      const lines = Object.entries(node).map((node) => {
        const [key, value] = node;
        if (value.children) {
          let nextKey;
          if (previousKey === '') {
            nextKey = `${key}.`;
          } else {
            nextKey = `${previousKey}${key}.`;
          }
          return iter(value.children, nextKey);
        }

        let deleted = value.deleted;
        if (typeof deleted === 'string') {
            deleted = `'${deleted}'`;
        }

        if (_.isObject(deleted)) {
            deleted = `[complex value]`;
        }
       
        let added = value.added;
        if (typeof added === 'string') {
            added = `'${added}'`;
        }

        if (_.isObject(added)) {
            added = `[complex value]`;
        }

        if (value.type === 'different') {
          return `Property '${previousKey}${key}' was updated. From ${deleted} to ${added}\n`;
        } if (value.type === 'first') {
          return `Property '${previousKey}${key}' was removed\n`;
        } if (value.type === 'second') {
          return `Property '${previousKey}${key}' was added with value: ${added}\n`;
        }
      });
      return [
        ...lines
      ].join('');
  }
  return iter(diff, '');
};

export default plain;