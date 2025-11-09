/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const map = {};

  // arr1 থেকে data যোগ করা
  for (const obj of arr1) {
    map[obj.id] = obj;
  }

  // arr2 থেকে data merge করা (overwrite সহ)
  for (const obj of arr2) {
    if (map[obj.id]) {
      map[obj.id] = { ...map[obj.id], ...obj };
    } else {
      map[obj.id] = obj;
    }
  }

  // map → array তে রূপান্তর এবং sort করা
  return Object.values(map).sort((a, b) => a.id - b.id);
};


