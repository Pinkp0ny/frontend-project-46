import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const parser = (filepath) => {
  const currentFilepath = path.resolve(process.cwd(), filepath);
  const extension = path.extname(currentFilepath);
  const fileContent = fs.readFileSync(currentFilepath);
  switch (extension) {
    case '.json':
      return JSON.parse(fileContent);
    case '.yaml':
      return yaml.load(fileContent);
    case '.yml':
      return yaml.load(fileContent);
    default:
      throw new Error('Unknown file extension');
  }
};
export default parser;
