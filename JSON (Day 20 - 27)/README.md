## 🧩 JSON (JavaScript Object Notation)

📘 সংজ্ঞা
JSON হলো একটি data format, যা তথ্যকে key-value pair আকারে সংরক্ষণ ও আদানপ্রদানের জন্য ব্যবহৃত হয়।
এটি মূলত JavaScript object syntax অনুসরণ করে, তবে এটি প্রায় সব প্রোগ্রামিং ভাষাতেই ব্যবহার করা যায় (Python, Java, C#, Go ইত্যাদি)।



## 🧱 JSON এর গঠন

JSON ডেটা দুটি প্রধান গঠন ব্যবহার করে:
- `Objects {}` — key-value pair আকারে ডেটা সংরক্ষণ করে
- `Arrays []` — একাধিক মানের তালিকা সংরক্ষণ করে

```js
{
  "name": "Mehedi Hasan",
  "age": 24,
  "isStudent": true,
  "skills": ["JavaScript", "Python", "C++"],
  "address": {
    "city": "Dhaka",
    "country": "Bangladesh"
  }
}

```

## 🔑 Key-Value Pair ব্যাখ্যা

| উপাদান                                         | বর্ণনা          |
| ---------------------------------------------- | --------------- |
| `"name"`                                       | Key (string)    |
| `"Mehedi Hasan"`                               | Value (string)  |
| `24`                                           | Value (number)  |
| `true`                                         | Value (boolean) |
| `["JavaScript", "Python", "C++"]`              | Value (array)   |
| `{ "city": "Dhaka", "country": "Bangladesh" }` | Nested object   |



## ⚙️ JSON এর নিয়মাবলী

✅ Keys সবসময় string হতে হবে
✅ String value সবসময় double quotes ("") এর মধ্যে থাকতে হবে
✅ Comma দিয়ে key-value pair আলাদা করা হয়
✅ শেষ value এর পর কখনো comma থাকবে না


## 🔄 JSON ব্যবহার (Parsing & Stringify)
| কাজ                  | JavaScript Function | উদাহরণ                           |
| -------------------- | ------------------- | -------------------------------- |
| JSON string → Object | `JSON.parse()`      | `JSON.parse('{"x":10, "y":20}')` |
| Object → JSON string | `JSON.stringify()`  | `JSON.stringify({x:10, y:20})`   |




