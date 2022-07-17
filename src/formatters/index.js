import stylish from './stylish.js';
import plain from './plain.js';
import toJson from './json.js';

export default (diff, format) => {
  let formatedDiff = diff;
  if (format === 'stylish' || !format) {
    formatedDiff = stylish(diff);
  } else if (format === 'plain') {
    formatedDiff = plain(diff);
  } else if (format === 'json') {
    formatedDiff = toJson(diff);
  }

  return formatedDiff;
};
