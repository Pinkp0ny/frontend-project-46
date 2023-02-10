import makeStylish from './stylish.js';
import makePlain from './plain.js';

const format = (diff, format) => {
  console.log(format);
  switch (format) {
    case 'stylish':
      return makeStylish(diff);
    case 'plain':
      return makePlain(diff);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
export default format;
