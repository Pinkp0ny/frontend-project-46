import yaml from 'js-yaml';

const parser = (fileContent, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(fileContent);
    case '.yaml':
      return yaml.load(fileContent);
    default:
      throw new Error('Unknown file extension');
  }
};
export default parser;
