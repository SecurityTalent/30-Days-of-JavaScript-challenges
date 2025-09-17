# 🚀 JavaScript Array Transformations

## 🔹 Array Transformations কী?
JavaScript-এ **Array Transformation** মানে হলো একটা অ্যারে থেকে নতুন অ্যারে বানানো, যেখানে আমরা প্রতিটি এলিমেন্টের উপর কিছু পরিবর্তন বা শর্ত প্রয়োগ করি।

### অ্যারের সাধারণ ট্রান্সফরমেশন মেথডগুলো হলো:
- `map()`
- `filter()`
- `reduce()`
- `forEach()`
- `sort()`
- `flatMap()`

---

## 🔹 1. map() – মান পরিবর্তন করে নতুন অ্যারে বানানো
`map()` প্রতিটি এলিমেন্টের উপর একটা ফাংশন চালায় এবং নতুন ভ্যালু রিটার্ন করে।

```javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]
```

## 🔹 2. filter() – শর্ত অনুযায়ী এলিমেন্ট বেছে নেওয়া

filter() প্রতিটি এলিমেন্ট পরীক্ষা করে। যেগুলো শর্ত পূরণ করে শুধু সেগুলো রাখে।

```js
let numbers = [5, 10, 15, 20];
let greaterThan10 = numbers.filter(n => n > 10);

console.log(greaterThan10); // [15, 20]
```
👉 ১০ এর চেয়ে বড় সংখ্যা শুধু রেখে দিয়েছে।


## 🔹 3. reduce() – পুরো অ্যারেকে একটি ভ্যালুতে নামিয়ে আনা
reduce() দিয়ে যোগফল, গড়, গুণ ইত্যাদি হিসাব করা যায়।

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(sum); // 10

```
👉 সব সংখ্যার যোগফল বের করেছে।


## 🔹 4. forEach() – শুধু প্রতিটি এলিমেন্টে কাজ করা

```js
forEach() নতুন অ্যারে রিটার্ন করে না, শুধু লুপ চালায়।

let fruits = ["apple", "mango", "banana"];
fruits.forEach((f, i) => {
  console.log(i, f.toUpperCase());
});

```
👉 শুধু প্রিন্ট করবে, নতুন অ্যারে বানাবে না।


## 🔹 5. sort() – সাজানো
sort() দিয়ে অ্যারে সাজানো হয়।

```js
let nums = [40, 10, 30, 20];
nums.sort((a, b) => a - b);

console.log(nums); // [10, 20, 30, 40]
```

## 🔹 6. flatMap() – map + flatten একসাথে
```js
let arr = [1, 2, 3];
let result = arr.flatMap(n => [n, n * 2]);

console.log(result); // [1, 2, 2, 4, 3, 6]

```
## ✅ সারসংক্ষেপ
- map() ➝ ডাটা পরিবর্তন
- filter() ➝ শর্ত দিয়ে বেছে নেওয়া
- reduce() ➝ সব ভ্যালু একত্র করা
- forEach() ➝ শুধু কাজ করা, রিটার্ন নেই
- sort() ➝ সাজানো
- flatMap() ➝ map + flatten


