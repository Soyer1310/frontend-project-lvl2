import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';

export default (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const format = path.extname(filePath);
  return parsers(content, format);
};
