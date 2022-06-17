import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import { differentFiles, equalFiles, emptyFiles } from '../__fixtures__/expected.file.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('JSON tests', () => {
  test('gendiff of two defferent flat JSONs', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(differentFiles);
  });

  test('gendiff with two equal JSONs', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file3.json'))).toEqual(equalFiles);
  });

  test('gendiff with two empty JSONs', () => {
    expect(genDiff(getFixturePath('empty1.json'), getFixturePath('empty2.json'))).toEqual(emptyFiles);
  });
});

describe('YAML tests', () => {
  test('gendiff of two defferent flat YAML', () => {
    expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toEqual(differentFiles);
  });

  test('gendiff with two equal YAML', () => {
    expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file3.yaml'))).toEqual(equalFiles);
  });

  test('gendiff with two empty YAML', () => {
    expect(genDiff(getFixturePath('empty1.yaml'), getFixturePath('empty2.yaml'))).toEqual(emptyFiles);
  });
});
