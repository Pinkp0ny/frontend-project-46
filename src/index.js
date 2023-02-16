import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import format from './formatters/index.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);
const getExtension = (file) => path.extname(file).slice(1);

const getFileContent = (file) => {
  const currentFilepath = getAbsolutePath(file);
  const extension = getExtension(file);
  const fileContent = fs.readFileSync(currentFilepath, 'utf-8');
  return parse(fileContent, extension);
};

const gendiff = (filePath1, filePath2, formatName = 'stylish') => {
  const fileContent1 = getFileContent(filePath1);
  const fileContent2 = getFileContent(filePath2);
  const diffTree = buildTree(fileContent1, fileContent2);
  return format(diffTree, formatName);
};
export default gendiff;
