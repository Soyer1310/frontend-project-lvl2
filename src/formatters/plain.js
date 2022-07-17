import _ from 'lodash';

const plain = (diff) => {
  const iter = (node, previousKey) => {
    const lines = Object.entries(node).map((item) => {
      const [key, value] = item;
      if (value.children) {
        let nextKey;
        if (previousKey === '') {
          nextKey = `${key}.`;
        } else {
          nextKey = `${previousKey}${key}.`;
        }
        return iter(value.children, nextKey);
      }

      let { deleted } = value;
      if (typeof deleted === 'string') {
        deleted = `'${deleted}'`;
      }

      if (_.isObject(deleted)) {
        deleted = '[complex value]';
      }

      let { added } = value;
      if (typeof added === 'string') {
        added = `'${added}'`;
      }

      if (_.isObject(added)) {
        added = '[complex value]';
      }

      if (value.type === 'different') {
        return `\nProperty '${previousKey}${key}' was updated. From ${deleted} to ${added}`;
      } if (value.type === 'deleted') {
        return `\nProperty '${previousKey}${key}' was removed`;
      } if (value.type === 'added') {
        return `\nProperty '${previousKey}${key}' was added with value: ${added}`;
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
