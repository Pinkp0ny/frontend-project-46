import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';
import result from '../__fixtures__/res.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('gendiff', () => {
  const first = getFixturePath('file1.json');
  const second = getFixturePath('file2.json');
  expect(gendiff(first, second)).toEqual(result);
});
