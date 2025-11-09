
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const result = {};

  for (const item of this) {
    const key = fn(item); // প্রতিটি item-এর জন্য key বের করা
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
};


// TypeScript 
// declare global {
//     interface Array<T> {
//         groupBy(fn: (item: T) => string): Record<string, T[]>
//     }
// }

// Array.prototype.groupBy = function(fn) {
//     const hash = {}
//     for (let item of this){
//         const key = fn(item)
//         hash[key] ||= []
//         hash[key].push(item)
//     }
//     return hash
// }

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */



