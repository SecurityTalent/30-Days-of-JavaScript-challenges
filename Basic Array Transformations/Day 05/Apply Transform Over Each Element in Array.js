// 2635. Apply Transform Over Each Element in Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
};












