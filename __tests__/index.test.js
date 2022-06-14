import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import { differentJsons, equalJsons, emptyJson } from '../__fixtures__/expected.file.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('gendiff of two defferent flat JSONs', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(differentJsons);
});

test('gendiff with two equal JSONs', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file3.json'))).toEqual(equalJsons);
});

test('gendiff with two empty JSONs', () => {
  expect(genDiff(getFixturePath('empty1.json'), getFixturePath('empty2.json'))).toEqual(emptyJson);
});
