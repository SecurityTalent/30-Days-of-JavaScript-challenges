# 📝 Function Transformations কী?

JavaScript-এ Function Transformation বলতে বোঝানো হয়
একটি ফাংশনকে ইনপুট হিসেবে নিয়ে আরেকটি নতুন ফাংশন তৈরি করা, যেটা আগের ফাংশনের আচরণ পরিবর্তন (transform) করে।


## যেমন:
- compose: একাধিক ফাংশনকে একত্রিত করে নতুন ফাংশন বানানো।
- once: একটি ফাংশনকে এমনভাবে মোড়ানো যাতে সেটি একবারই চলে।
- argumentsLength: ফাংশন কলের আর্গুমেন্টের সংখ্যা বের করা।
- memoize: আগের ফলাফল মনে রেখে পরের বার দ্রুত রিটার্ন করা।
- debounce/throttle: ফাংশন কলের ফ্রিকোয়েন্সি কন্ট্রোল করা।


# 🎯 উদাহরণসমূহ (Function Transformation)
## 1️⃣ Function Composition (ফাংশন একত্র করা)
```js
var compose = function(functions) {
  return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  }
};

```


## 2️⃣ Allow One Function Call (একবারই চালানো যাবে)
```js
var once = function(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
};

```
## 3️⃣ Count Arguments (আর্গুমেন্টের সংখ্যা বের করা)
```js
var argumentsLength = function(...args) {
  return args.length;
};
```

## 4️⃣ Memoize (ফলাফল মনে রাখা)
```js
var memoize = function(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
};
```

## 📚 সারসংক্ষেপ
Function Transformations মানে ফাংশনের উপর ফাংশন চালানো বা ফাংশনের আচরণ বদলে নতুন ফাংশন বানানো।
এগুলো JavaScript-এর Functional Programming স্টাইলে খুব জনপ্রিয়।