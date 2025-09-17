
// 2634. Filter Elements from Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // const filteredArr = [];
    // for(let i = 0; i < arr.length; i++){
    //     if(fn(arr[i], i)){
    //         filteredArr.push(arr[i]);
    //     }
    // }
    // return filteredArr;
    let res = [];
    for (let [i, val] of arr.entries()) {
        if (fn(val, i)) res.push(val);
    }
    return res;
};










