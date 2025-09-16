// 2665. Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;   // mutable counter
    const rst = init;   // store original reset value

    const obj = {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        reset() {
            count = rst;
            return count;
        }
    };

    return obj;
};

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset());     // 5

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */