import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import stylish from '../src/stylish.js';
import { differentFiles, equalFiles, emptyFiles } from '../__fixtures__/expected.file.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('JSON tests', () => {
  test('gendiff of two defferent JSONs', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
    expect(stylish(diff)).toEqual(differentFiles);
  });

  test('gendiff with two equal JSONs', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file3.json'));
    expect(stylish(diff)).toEqual(equalFiles);
  });

  test('gendiff with two empty JSONs', () => {
    const diff = genDiff(getFixturePath('empty1.json'), getFixturePath('empty2.json'));
    expect(stylish(diff)).toEqual(emptyFiles);
  });
});

describe('YAML tests', () => {
  test('gendiff of two defferent flat YAML', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'));
    expect(stylish(diff)).toEqual(differentFiles);
  });

  test('gendiff with two equal YAML', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file3.yaml'));
    expect(stylish(diff)).toEqual(equalFiles);
  });

  test('gendiff with two empty YAML', () => {
    const diff = genDiff(getFixturePath('empty1.yaml'), getFixturePath('empty2.yaml'));
    expect(stylish(diff)).toEqual(emptyFiles);
  });
});
