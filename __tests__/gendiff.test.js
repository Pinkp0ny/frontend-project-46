import { test, expect, describe } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe.each([
  ['stylish'],
  ['json'],
  ['plain'],
])('%s format', (format) => {
  test.each([
    ['json'],
    ['yaml'],
  ])('%s files', (ext) => {
    const filePath1 = getFixturePath(`file1.${ext}`);
    const filePath2 = getFixturePath(`file2.${ext}`);
    const resultPath = getFixturePath(`${format}Result.txt`);
    const result = fs.readFileSync(resultPath, 'utf-8');

    expect(gendiff(filePath1, filePath2, format)).toEqual(result);
  });
});
