/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, depth) {
  const result = [];

  for (const el of arr) {
    if (Array.isArray(el) && depth > 0) {
      result.push(...flat(el, depth - 1));
    } else {
      result.push(el);
    }
  }

  return result;
};


















