import fs from 'fs';

export default (path) => {
  const content = fs.readFileSync(path, 'utf8');
  return JSON.parse(content);
};
