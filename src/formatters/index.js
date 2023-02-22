import makeStylish from './stylish.js';
import makePlain from './plain.js';

const format = (diff, formatName) => {
  switch (formatName) {
    case 'stylish':
      return makeStylish(diff);
    case 'plain':
      return makePlain(diff);
    case 'json':
      return JSON.stringify(diff, null, '');
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};
export default format;
