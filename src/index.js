import _ from 'lodash';
import parse from './parsers.js';

export default (filePath1, filePath2) => {
  const parsedFile1 = parse(filePath1);
  const parsedFile2 = parse(filePath2);
  const gendiff = (object1, object2) => {
    const keys1 = _.sortBy(Object.keys(object1));
    const result = {};
    for (let i = 0; i < keys1.length; i += 1) {
      const key1 = keys1[i];
      if (!object2[key1]) {
        result[`-${key1}`] = object1[key1];
      } else if (object1[key1] === object2[key1]) {
        result[`${key1}`] = object1[key1];
      } else {
        result[`+${key1}`] = object2[key1];
        result[`-${key1}`] = object1[key1];
      }
    }

    const keys2 = _.sortBy(Object.keys(object2));
    for (let i = 0; i < keys2.length; i += 1) {
      const key2 = keys2[i];
      if (!object1[key2]) {
        result[`-${key2}`] = object2[key2];
      }
    }
    return result;
  };
  const diff = gendiff(parsedFile1, parsedFile2);
  return (diff);
};
