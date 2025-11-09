
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  // যদি array হয়
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  
  // যদি object হয়
  return Object.keys(obj).length === 0;
};






