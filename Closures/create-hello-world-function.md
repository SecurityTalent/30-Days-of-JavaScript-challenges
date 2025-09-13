# Day 01 Problems Closures: createHelloWorld Function

## Problem Description

Write a function `createHelloWorld` that returns a new function.  
The returned function should always return the string `"Hello World"` no matter what arguments are passed to it.

---

## Explanation (in Bangla)

১. **createHelloWorld ফাংশনটি:**  
এটি একটি ফাংশন যা আবার একটি নতুন ফাংশন রিটার্ন করে।  
অর্থাৎ, যখন তুমি `createHelloWorld()` কল করবে, তখন এটি তোমাকে একটি নতুন ফাংশন দিবে।

২. **const fn = createHelloWorld();**  
এখানে, তুমি `createHelloWorld()` কল করলে একটি ফাংশন পাবে, সেটাকে `fn` নামক ভেরিয়েবলে রাখলে।  
`fn` এখন সেই ফাংশন যা `"Hello World"` রিটার্ন করে।

৩. **console.log(fn());**  
এখানে তুমি `fn()` কল করছো, অর্থাৎ সেই ফাংশনটি চালাচ্ছো, যা `"Hello World"` রিটার্ন করবে।  
তারপর সেটা `console.log` দিয়ে প্রিন্ট করো।

---

## Constraints

- 0 <= args.length <= 10  
- The returned function should ignore any arguments passed to it and always return `"Hello World"`.

---

## Example

```js

function createHelloWorld() {
    return function(...args) {
        return "Hello World";
    }
}


const f = createHelloWorld();
console.log(f());                // Output: "Hello World"
console.log(f({}, null, 42));   // Output: "Hello World"
