import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import formatter from './formatters/index.js';

const getFileContent = (file) => {
  const currentFilepath = path.resolve(process.cwd(), file);
  const extension = path.extname(currentFilepath);
  const fileContent = fs.readFileSync(currentFilepath, 'utf-8');
  return parse(fileContent, extension);
};

const gendiff = (filePath1, filePath2, formatName = 'stylish') => {
  const file1 = getFileContent(filePath1);
  const file2 = getFileContent(filePath2);
  const diffInfo = buildTree(file1, file2);
  return formatter(diffInfo, formatName);
};
export default gendiff;
