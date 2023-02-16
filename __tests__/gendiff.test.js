import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';
import { stylishResult, plainResult, jsonResult } from '../__fixtures__/res.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test.each([
  ['file1.json', 'file2.json', 'stylish', stylishResult],
  ['file1.json', 'file2.json', 'plain', plainResult],
  ['file1.json', 'file2.json', 'json', jsonResult],
  ['file1.yaml', 'file2.yaml', undefined, stylishResult],
  ['file1.yaml', 'file2.yaml', 'plain', plainResult],
  ['file1.yaml', 'file2.yaml', 'json', jsonResult],
])('diff', (filePath1, filePath2, format, result) => {
  expect(gendiff(getFixturePath(filePath1), getFixturePath(filePath2), format)).toEqual(result);
});
