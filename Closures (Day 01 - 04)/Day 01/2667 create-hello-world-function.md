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
```

# 📘 JavaScript Function Types – A Complete Guide

Functions are the heart of JavaScript. They allow you to reuse logic, organize code, and build complex applications.
In this guide, we’ll explore all the different ways you can write functions in JavaScript, with examples 🚀

## 1. Function Declaration
```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Mehedi")); // Hello, Mehedi!

```

✔️ Hoisted (can be used before declaration).

## 2. Function Expression
```js
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Hasan"));


```
✔️ Stored in a variable. Not hoisted.

## 3. Arrow Function
```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("World"));

```

✔️ Short & modern. Does not have its own this.

## 4. Anonymous Function
```js
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);

```

✔️ No name, often used as callbacks.

## 5. IIFE (Immediately Invoked Function Expression)
```js
(function() {
  console.log("IIFE runs immediately!");
})();

(() => console.log("Arrow IIFE runs too!"))();

```

✔️ Executes immediately after being defined.

## 6. Constructor Function
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Mehedi", 25);
console.log(user.name); // Mehedi

```

✔️ Used with new to create objects.

## 7. Generator Function
```js
function* countNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = countNumbers();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3

```

✔️ Returns an iterator using yield.

## 8. Async Function
```js
async function fetchData() {
  return "Data loaded!";
}

fetchData().then(console.log);

```

✔️ Returns a Promise.

## 9. Callback Function
```js
function processUserInput(callback) {
  const name = "Mehedi";
  callback(name);
}

processUserInput(function(userName) {
  console.log(`Hello, ${userName}`);
});

```

✔️ A function passed into another function.

## 10. Higher-Order Function
```js
  function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

```

✔️ Takes/returns another function.

## 11. Recursive Function
```js
  function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

```

✔️ A function that calls itself.

## 12. Default Parameters
```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!

```

✔️ Provides fallback values.

## 13. Rest Parameters
```js
  function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

```

✔️ Accepts unlimited arguments.

## 14. Object Method Function
```js
  const user = {
  name: "Mehedi",
  greet() {
    return `Hello, ${this.name}!`;
  }
};

console.log(user.greet());

```

✔️ Functions inside objects.

## 15. Class with Methods
```js
  class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}

const p = new Person("Hasan");
console.log(p.greet());
```

✔️ Functions inside ES6 classes.


