import stylish from './stylish.js';
import plain from './plain.js';
import toJson from './json.js';

export default (diff, format) => {
  if (format === 'stylish' || !format) {
    return stylish(diff);
  }
  if (format === 'plain') {
    return plain(diff);
  }
  if (format === 'json') {
    return toJson(diff);
  }
  throw new Error(`Unknown format: '${format}'!`);
};
