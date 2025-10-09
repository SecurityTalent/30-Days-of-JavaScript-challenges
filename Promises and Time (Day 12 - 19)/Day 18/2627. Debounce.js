/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer; // to store the timeout id
    
    return function(...args) {
        // cancel any existing scheduled execution
        if (timer) clearTimeout(timer);
        
        // schedule new execution after t ms
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    }
};


/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */















