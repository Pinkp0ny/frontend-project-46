import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value) && value != null) {
    return '[complex value]';
  }
  if (value === null) {
    return null;
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const makePlain = (diff) => {
  const property = 'Property \'';
  const iter = (property, parent) => {
    const tree = parent.map((node) => {
      switch (node.type) {
        case 'added':
          return `${property}${node.key}' was added with value: ${stringify(node.value)}`;
        case 'removed':
          return `${property}${node.key}' was removed`;
        case 'changed':
          return `${property}${node.key}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
        case 'nested':
          return `${iter(`${property}${[node.key]}.`, node.children)}`;
        case 'unchanged':
          return null;
        default:
          throw new Error(`Unknown order state: '${node.type}'!`);
      }
    });
    const result = _.compact(tree);
    return `${result.join('\n')}`;
  };
  return iter(property, diff);
};

export default makePlain;
