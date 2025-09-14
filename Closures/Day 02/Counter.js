// 2620. Counter Problem solve

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
         return n++;
    };
};

let result = createCounter(10);
console.log(result()); // 10
console.log(result()); // 11
console.log(result()); // 12


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */



