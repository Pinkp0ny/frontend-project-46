import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';
import { stylishResult, plainResult, jsonResult } from '../__fixtures__/res.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('stylish gendiff', () => {
  const first = getFixturePath('file1.json');
  const second = getFixturePath('file2.json');
  expect(gendiff(first, second, 'stylish')).toEqual(stylishResult);
});
test('plain gendiff', () => {
  const first = getFixturePath('file1.json');
  const second = getFixturePath('file2.json');
  expect(gendiff(first, second, 'plain')).toEqual(plainResult);
});
test('json gendiff', () => {
  const first = getFixturePath('file1.json');
  const second = getFixturePath('file2.json');
  expect(gendiff(first, second, 'json')).toEqual(jsonResult);
});
