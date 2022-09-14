import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const stylish = readFile('stylish.txt');
const plain = readFile('plain.txt');
const json = readFile('json.txt');

describe('JSON tests', () => {
  test('gendiff with two defferent JSONs (stylish formatter)', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
    expect(diff).toEqual(stylish);
  });

  test('gendiff JSONs (plain formatter)', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
    expect(diff).toEqual(plain);
  });

  test('gendiff JSONs (json formatter)', () => {
    const diff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json');
    expect(diff).toEqual(json);
  });
});

describe('YAML tests', () => {
  test('gendiff of two defferent YAML (stylish formatter)', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'stylish');
    expect(diff).toEqual(stylish);
  });

  test('gendiff YAML with (plain formatter)', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain');
    expect(diff).toEqual(plain);
  });

  test('gendiff YAMLs with (json formatter)', () => {
    const diff = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json');
    expect(diff).toEqual(json);
  });
});
