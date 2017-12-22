const jsonic = require('jsonic');

const chars = {
  '[': ']',
  '{': '}'
};

const any = (iteree, iterator) => {
  let result;
  for (let i = 0; i < iteree.length; i++) {
    result = iterator(iteree[i], i, iteree);
    if (result) {
      break;
    }
  }
  return result;
};

const extract = (str) => {
  try {
    let startIndex = str.search(/[\{\[]/);
    if (startIndex === -1) {
      return null;
    }

    let openingChar = str[ startIndex ];
    let closingChar = chars[ openingChar ];
    let endIndex = -1;
    let count = 0;

    str = str.substring(startIndex);
    any(str, (letter, i) => {
      if (letter === openingChar) {
        count++;
      } else if (letter === closingChar) {
        count--;
      }

      if (!count) {
        endIndex = i;
        return true;
      }
    });
    let obj = str.substring(0, endIndex + 1);
    return obj;
  } catch (e) {
    return null;
  }
};

module.exports = (str) => {
  let result;
  const objects = [];
  while ((result = extract(str)) !== null) {
    objects.push(jsonic(result));
    str = str.replace(result, '');
  }

  return objects;
};
