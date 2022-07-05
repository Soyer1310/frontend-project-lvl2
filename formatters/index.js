import stylish from './stylish.js';
import plain from './plain.js';

export default (diff, format) => {
  let formatedDiff = diff;
  if (format === 'stylish') {
    formatedDiff = stylish(diff);
  } else if (format === 'plain') {
    formatedDiff = plain(diff);
  }

  return formatedDiff;
};
