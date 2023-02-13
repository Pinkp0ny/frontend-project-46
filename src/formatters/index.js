import makeStylish from './stylish.js';
import makePlain from './plain.js';

const formatter = (diff, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(diff);
    case 'plain':
      return makePlain(diff);
    case 'json':
      return JSON.stringify(diff);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
export default formatter;
