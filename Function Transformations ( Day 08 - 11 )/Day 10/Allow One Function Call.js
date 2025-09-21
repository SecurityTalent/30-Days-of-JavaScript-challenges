// 2666. Allow One Function Call

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;  // প্রথমবার চালানো হয়েছে কি না সেটি ট্র্যাক করবে
    let result;          // প্রথমবারের ফলাফল সংরক্ষণ করবে

    return function(...args) {
        if (!called) {
            called = true;        // প্রথমবার চালানো হলো
            result = fn(...args); // ফলাফল নিলাম
            return result;
        }
        return undefined;         // দ্বিতীয়বার undefined রিটার্ন করবে
    };
};
