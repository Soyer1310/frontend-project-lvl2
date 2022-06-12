import { cwd } from 'process';

import path from 'path';

export default (processedPath) => {
  const currentDir = cwd();
  return path.resolve(currentDir, processedPath);
};
