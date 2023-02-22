import yaml from 'js-yaml';

const parser = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown file extension: ${extension}`);
  }
};
export default parser;
