import yaml from 'js-yaml';

export default (content, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(content);

    case '.yaml':
    case '.yml':
      return yaml.load(content);

    default:
      return null;
  }
};
