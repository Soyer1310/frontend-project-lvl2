import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';
import {
  differentFiles, equalFiles, emptyFiles, plainFiles, jsonStr,
} from '../src/expected.file.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('JSON tests', () => {
  test('gendiff with two defferent JSONs (stylish formatter)', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
    expect(diff).toEqual(differentFiles);
  });

  test('gendiff with two equal JSONs (stylish formatter)', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file3.json'), 'stylish');
    expect(diff).toEqual(equalFiles);
  });

  test('gendiff with two empty JSONs (stylish formatter)', () => {
    const diff = genDiff(getFixturePath('empty1.json'), getFixturePath('empty2.json'), 'stylish');
    expect(diff).toEqual(emptyFiles);
  });

  test('gendiff JSONs (plain formatter)', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
    expect(diff).toEqual(plainFiles);
  });

  test('gendiff JSONs (json formatter)', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json');
    expect(diff).toEqual(jsonStr);
  });
});

describe('YAML tests', () => {
  test('gendiff of two defferent YAML (stylish formatter)', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'stylish');
    expect(diff).toEqual(differentFiles);
  });

  test('gendiff with two equal YAML (stylish formatter)', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file3.yaml'), 'stylish');
    expect(diff).toEqual(equalFiles);
  });

  test('gendiff with two empty YAML (stylish formatter)', () => {
    const diff = genDiff(getFixturePath('empty1.yaml'), getFixturePath('empty2.yaml'), 'stylish');
    expect(diff).toEqual(emptyFiles);
  });

  test('gendiff YAML with (plain formatter)', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain');
    expect(diff).toEqual(plainFiles);
  });

  test('gendiff YAMLs with (json formatter)', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json');
    expect(diff).toEqual(jsonStr);
  });
});
