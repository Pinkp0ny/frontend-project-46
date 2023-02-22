import { test, expect, describe } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';
import { stylishResult, plainResult, jsonResult } from '../__fixtures__/res.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe.each([
  ['json', 'plain', plainResult],
  ['json', 'stylish', stylishResult],
  ['json', 'json', jsonResult],
  ['yaml', undefined, stylishResult],
  ['yaml', 'plain', plainResult],
  ['yaml', 'json', jsonResult],
])('gendiff, %s, format: %s', (ext, format, result) => {
  test('1', () => {
    const filePath1 = getFixturePath(`file1.${ext}`);
    const filePath2 = getFixturePath(`file2.${ext}`);
    expect(gendiff(filePath1, filePath2, format)).toEqual(result);
  });
});
