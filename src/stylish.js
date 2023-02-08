const indent = (depth, spaceCount = 4) => ' '.repeat(spaceCount * depth - 2);
const stringify = (data, treeDepth) => {
  if (typeof data !== 'object') {
    return `${data}`;
  }
  if (data === null) { return null; }
  const lines = Object
    .entries(data)
    .map(([key, value]) => `${indent(treeDepth + 1)}  ${key}: ${stringify(value, treeDepth + 1)}`);
  return ['{', ...lines, `${indent(treeDepth)}  }`].join('\n');
};
const makeStylish = (innerTree) => {
  const iter = (tree, depth) => tree.map((node) => {
    const getValue = (value, sign) => `${indent(depth)}${sign} ${node.key}: ${stringify(value, depth)}\n`;
    switch (node.type) {
      case 'added':
        return getValue(node.value, '+');
      case 'removed':
        return getValue(node.value, '-');
      case 'unchanged':
        return getValue(node.value, ' ');
      case 'changed':
        return `${getValue(node.value1, '-')}${getValue(node.value2, '+')}`;
      case 'nested':
        return `${indent(depth)} ${node.key}: {\n${iter(node.children, depth + 1).join('')}${indent(depth)}  }\n`;
      default:
        throw new Error(`error ${node.type}`);
    }
  });
  return `{\n${iter(innerTree, 1).join('')}}`;
};

export default makeStylish;
