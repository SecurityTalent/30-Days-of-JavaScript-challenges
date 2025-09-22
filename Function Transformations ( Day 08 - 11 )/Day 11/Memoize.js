/**
 * @param {Function} fn
 * @return {Function}
 */

// function memoize(fn) {
//   const cache = new Map();
//   let callCount = 0;

//   const memoized = function(...args) {
//     const key = args.join(','); // make arguments into a string key
//     if (cache.has(key)) {
//       return cache.get(key); // return cached value
//     }
//     const result = fn(...args); // call original function
//     cache.set(key, result); // store in cache
//     callCount++; // increase count
//     return result;
//   };

//   // get how many times the original function was called
//   memoized.getCallCount = () => callCount;

//   return memoized;
// }

// /**
//  * This simulates LeetCode's test input:
//  * fnName = "sum" or "fib" or "factorial"
//  * actions = ["call","call","getCallCount",...]
//  * values = [[2,2],[2,2],[],[1,2],[]]
//  */
// function run(fnName, actions, values) {
//   // choose which function to use
//   let fn;
//   if (fnName === "sum") fn = (a, b) => a + b;
//   if (fnName === "factorial") fn = (n) => (n <= 1 ? 1 : n * fn(n - 1));
//   if (fnName === "fib") fn = (n) => (n <= 1 ? 1 : fn(n - 1) + fn(n - 2));

//   const memoized = memoize(fn);
//   const output = [];

//   for (let i = 0; i < actions.length; i++) {
//     if (actions[i] === "call") {
//       output.push(memoized(...values[i]));
//     } else if (actions[i] === "getCallCount") {
//       output.push(memoized.getCallCount());
//     }
//   }

//   return output;
// }

// // Example 1:
// console.log(run("sum",
//   ["call","call","getCallCount","call","getCallCount"],
//   [[2,2],[2,2],[],[1,2],[]]
// )); 
// // Output: [4,4,1,3,2]

// // Example 2:
// console.log(run("factorial",
//   ["call","call","call","getCallCount","call","getCallCount"],
//   [[2],[3],[2],[],[3],[]]
// )); 
// // Output: [2,6,2,2,6,2]

// // Example 3:
// console.log(run("fib",
//   ["call","getCallCount"],
//   [[5],[]]
// )); 
// // Output: [8,1]



function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache[key] !== undefined) {
      return cache[key];
    }
    
    const result = fn(...args);
    cache[key] = result;
    
    return result;
  };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */