import yaml from 'js-yaml';
import path from 'path';

export default (content, filename) => {
  const dataType = path.extname(filename).slice(1);
  switch (dataType) {
    case 'json':
      return JSON.parse(content);

    case 'yaml':
    case 'yml':
      return yaml.load(content);

    default:
      throw new Error(`Unknown file type: '${dataType}'!`);
  }
};
