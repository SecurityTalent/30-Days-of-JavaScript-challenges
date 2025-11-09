# 🏫 JavaScript Classes – সম্পূর্ণ গাইড

## 📘 কি হলো Class?

JavaScript–এ **Class** হলো একটি **blueprint** বা template, যা দিয়ে আমরা objects তৈরি করি।  
Class–এর মধ্যে আমরা **properties (data)** এবং **methods (functions)** রাখতে পারি।  

Class–এর সাহায্যে object-oriented programming (OOP) করা সহজ হয়।

---

## 💡 Syntax

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age;   // property
  }

  // method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

### 🧠 ব্যাখ্যা

- class Person { ... } → Person নামের class তৈরি।
- constructor → object তৈরি করার সময় run হয়।
- this.name এবং this.age → এই object–এর property।
- greet() → method, যেটি object থেকে call করা যায়।


### 🧮 Object তৈরি (Instantiation)
```js
const person1 = new Person("Alice", 25);
console.log(person1.name); // Output: Alice
person1.greet();            // Output: Hello, my name is Alice
```
- new Person(...) → নতুন object তৈরি করে।
- person1.name → property access।
- person1.greet() → method call।


🔹 Inheritance (উত্তরাধিকার)
একটি class অন্য class–কে extend করতে পারে।
```js
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // parent class constructor call
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}`);
  }
}

const student1 = new Student("Bob", 20, 12);
student1.greet(); // Hello, my name is Bob
student1.study(); // Bob is studying in grade 12

```
- extends → inheritance দেখায়।
- super() → parent class constructor call করতে হয়।


🔹 Static Methods
Class–এর method শুধুমাত্র class থেকে call করা যায়, object থেকে নয়।
```js
class MathUtil {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.square(5)); // 25

```
static keyword → object নয়, class–এর সাথে directly যুক্ত।


🔹 Getters & Setters
Class–এ property access করার জন্য getter ও setter ব্যবহার করা যায়।
```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set setWidth(width) {
    this.width = width;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50
rect.setWidth = 7;
console.log(rect.area); // 70

```

🔹 Private Fields (ES2022)
```#``` দিয়ে private property তৈরি করা যায়, যা class বাহিরে access করা যায় না।





```js
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(100);
acc.deposit(50);
console.log(acc.getBalance()); // 150
// console.log(acc.#balance);  // Error

```





