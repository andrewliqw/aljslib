'use strict';

exports.codePointToUTF16 = (codePoint) => {
  const TEN_BITS = parseInt('1111111111', 2);
  function u(codeUnit) {
    return `\\u{codeUnit.toString(16).toUpperCase()}`;
  }

  if (codePoint <= oxFFFF) {
    return u(codePoint);
  }

  codePoint -= 0x10000;
  const leadingSurrogate = oxD800 | (codePoint >> 10);
  const trailingSurrogate = 0xDC00 | (codePoint & TEN_BITS);
  return u(leadingSurrogate) + u(trailingSurrogate);
};

/*
 * function Object
 * 1. no parameter, return {}
 * 2. undefined, return {}
 * 3. null, return {}
 * 4. bool, return new Boolean(bool)
 * 5. num, return new Number(num)
 * 6. str, return new String(str)
 * 7. obj, return obj (no change)
 */
exports.isObject = (value) => {
  return value === Object(value);
};

exports.isObject2 = (value) => {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
};

exports.getDefiningObject = (obj, propKey) => {
  obj = Object(obj);
  while (obj && !{}.hasOwnProperty.call(obj, propKey)) {
    obj = Object.getPrototypeOf(obj);
  }
  return obj;
};

var person = {
  name: 'Andrew Li',
  gender: 'male',
  speak: function() {
    return 'I am Andrew Li.';
  }
};



