// 2626. Array Reduce Transformation 

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

//  Classic for loop

var reduce = function(nums, fn, init) {
    let total = init
    for(i = 0; i<nums.length; i++){
        total = fn(total, nums[i])
    }
    return total;

};


// for...of with index

// var reduce = function(nums, fn, init) {
//   let total = init;
//   for (let [i, val] of nums.entries()) {
//     total = fn(total, val, i); 
//   }
//   return total;
// };


// forEach

// var reduce = function(nums, fn, init) {
//   let total = init;
//   nums.forEach((val, i) => {
//     total = fn(total, val, i);
//   });
//   return total;
// };

// recursion

// var reduce = function(nums, fn, init, i = 0) {
//   if (i >= nums.length) return init;
//   return reduce(nums, fn, fn(init, nums[i], i), i + 1);
// };


// built-in Array.prototype.reduce (meta-solution)

// var reduce = function(nums, fn, init) {
//   return nums.reduce((acc, val, i) => fn(acc, val, i), init);
// };


