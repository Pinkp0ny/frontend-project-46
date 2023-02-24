import { test, expect, describe } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';
import { stylishResult, plainResult, jsonResult } from '../__fixtures__/res.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe.each([
  ['json'],
  ['stylish'],
  ['plain'],
  [undefined],
])('%s formatter', (format) => {
  test.each([
    ['json'],
    ['yaml'],
  ])('%s files', (ext) => {
    const filePath1 = getFixturePath(`file1.${ext}`);
    const filePath2 = getFixturePath(`file2.${ext}`);
    switch (format) {
      case 'json':
        expect(gendiff(filePath1, filePath2, format)).toEqual(jsonResult);
        break;
      case 'stylish':
        expect(gendiff(filePath1, filePath2, format)).toEqual(stylishResult);
        break;
      case 'plain':
        expect(gendiff(filePath1, filePath2, format)).toEqual(plainResult);
        break;
      default:
        expect(gendiff(filePath1, filePath2, format)).toEqual(stylishResult);
    }
  });
});
