import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';
import { stylishResult, plainResult, jsonResult } from '../__fixtures__/res.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test.each([
  ['file1.json', 'file2.json', stylishResult, 'stylish'],
  ['file1.json', 'file2.json', plainResult, 'plain'],
  ['file1.json', 'file2.json', jsonResult, 'json'],
  ['file1.yaml', 'file2.yaml', stylishResult, undefined],
  ['file1.yaml', 'file2.yaml', plainResult, 'plain'],
  ['file1.yaml', 'file2.yaml', jsonResult, 'json'],
])('1', (filePath1, filePath2, result, format) => {
  expect(gendiff(getFixturePath(filePath1), getFixturePath(filePath2), format)).toEqual(result);
});
