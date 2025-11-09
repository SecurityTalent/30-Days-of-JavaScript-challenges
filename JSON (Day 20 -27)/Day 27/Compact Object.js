/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map(compactObject) // ভিতরের উপাদানগুলোও compact করো
      .filter(Boolean);   // falsy মান বাদ দাও
  } else if (obj !== null && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      const compacted = compactObject(value);
      if (Boolean(compacted)) result[key] = compacted;
    }
    return result;
  }
  return obj;
};
