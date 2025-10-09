# 🕒 JavaScript এ Promises এবং Time

JavaScript এ **Promise** একটি গুরুত্বপূর্ণ ধারণা, যা ভবিষ্যতে কোনো একটি **অ্যাসিনক্রোনাস কাজের ফলাফল** প্রদান করে। এটি এক ধরনের অবজেক্ট, যা হয় **resolve** (সফলভাবে সম্পন্ন) অথবা **reject** (ত্রুটি সহ ব্যর্থ) হয়।

---

## 🔹 ১. Promise কী?

Promise এমন একটি অবজেক্ট যা কোনো অ্যাসিনক্রোনাস অপারেশনের ভবিষ্যৎ ফলাফল প্রকাশ করে।

```js
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data loaded successfully!");
  } else {
    reject("There was a problem loading the data!");
  }
});

promise
  .then(result => console.log(result)) // সফল হলে
  .catch(error => console.error(error)) // ব্যর্থ হলে
  .finally(() => console.log("Operation completed"));

```

## ⏱️ ২. Promises এবং সময় (Time)

Promise সাধারণত setTimeout() বা সময়-নির্ভর কাজের সাথে ব্যবহৃত হয়।
উদাহরণস্বরূপ, নিচে একটি delay() ফাংশন আছে যা নির্দিষ্ট সময় অপেক্ষা করে Promise রিটার্ন করে।

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000)
  .then(() => console.log("Executed after 2 seconds!"));

```

## ⚙️ ৩. Async / Await এর মাধ্যমে সময় নিয়ন্ত্রণ

async এবং await ব্যবহারে কোডটি সিঙ্ক্রোনাসের মতো দেখালেও এটি অ্যাসিনক্রোনাসভাবে কাজ করে।
```js
async function fetchData() {
  console.log("Loading...");
  await delay(3000); // ৩ সেকেন্ড অপেক্ষা
  console.log("Data loading complete!");
}

fetchData();
```
## 🔁 ৪. Promise + Time লুপে ব্যবহার

একটি লুপের মধ্যে Promise ব্যবহার করে নির্দিষ্ট সময় অপেক্ষা করে পরবর্তী কাজ চালানো যায়।

```js
async function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    await delay(1000); // প্রতি ১ সেকেন্ডে পরবর্তী সংখ্যা
  }
}

printNumbers();

```
## ⚡ ৫. Promise.all() এর মাধ্যমে একাধিক কাজ একসাথে

Promise.all() একাধিক Promise একসাথে চালায় এবং সবগুলো শেষ হলে রেজাল্ট দেয়।
```js
const task1 = delay(1000).then(() => "Task 1 done");
const task2 = delay(2000).then(() => "Task 2 done");
const task3 = delay(1500).then(() => "Task 3 done");

Promise.all([task1, task2, task3]).then(results => {
  console.log(results);
});

```

## 🏁 ৬. Promise.race() এর মাধ্যমে দ্রুততম ফলাফল পাওয়া

Promise.race() এমন Promise রিটার্ন করে যেটি সবার আগে resolve হয়।

```js
Promise.race([
  delay(1000).then(() => "Fast"),
  delay(3000).then(() => "Slow")
]).then(result => console.log(result));

```
# 📘 সারাংশ (Summary Table)

| ধারণা | ফাংশন | ব্যাখ্যা |
|--------|--------|----------|
| `setTimeout()` | নির্দিষ্ট সময় পর কাজ চালানো | পুরনো অ্যাসিনক্রোনাস পদ্ধতি |
| `Promise` | ভবিষ্যতের মান ধারণ করে | অ্যাসিনক্রোনাস ভিত্তি |
| `async/await` | Promise কে সহজভাবে ব্যবহার | কোডকে পড়া সহজ করে |
| `Promise.all()` | একাধিক Promise অপেক্ষা | সব কাজ শেষ হলে রিটার্ন |
| `Promise.race()` | প্রথম শেষ হওয়া Promise | দ্রুততম রেজাল্ট দেয় |









