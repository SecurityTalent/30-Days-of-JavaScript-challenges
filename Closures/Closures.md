# JavaScript Closures (বাংলা ব্যাখ্যা)

## 🔹 Closures কী?
**Closure** হচ্ছে JavaScript এর একটি ধারণা, যেখানে একটি **inner function** তার বাইরের function (parent function) এর **variable এবং scope**-কে মনে রাখতে পারে, এমনকি বাইরের function কাজ শেষ হয়ে গেলেও।

অর্থাৎ, closure হলো একটা function যেটা তার চারপাশের lexical scope-এর সাথে “বন্ধন” তৈরি করে রাখে।

---

## 🔹 কেন দরকার?
- ডাটা **private রাখা** যায় (encapsulation)।  
- Function এর ভিতরের variable বাইরে থেকে সরাসরি access করা যায় না।  
- **Reusable function** তৈরি করা যায়।  

---

## 🔹 Closures Example Code  

### 1. Basic Closure
```javascript
function outerFunction() {
  let count = 0; // outer function এর variable

  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}

const counter = outerFunction(); 
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```
👉 এখানে `counter` function বারবার কল করলে, `count` এর value মনে রাখছে।  

---

### 2. Closure দিয়ে Private Variable তৈরি
```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      } else {
        return "Not enough money!";
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));   // 1500
console.log(account.withdraw(200));  // 1300
console.log(account.getBalance());   // 1300
```
👉 এখানে `balance` variable বাইরের থেকে access করা যাচ্ছে না, শুধু closure function দিয়েই access করা যাচ্ছে।  

---

### 3. Closures with Parameters
```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```
👉 এখানে `multiplier` একটি closure function তৈরি করছে, যেটা ভিন্ন ভিন্ন `factor` মনে রাখছে।  

---

### 4. Loop এ Closure Problem Fix
```javascript
for (var i = 1; i <= 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  })(i);
}
```
👉 Output হবে:
```
1
2
3
```
কারণ প্রতিটি iteration এর `i` আলাদা করে closure এ bind হয়ে গেছে।  

---

### 5. Function Factory (Closure ব্যবহার করে)
```javascript
function power(p) {
  return function(n) {
    return Math.pow(n, p);
  }
}

const square = power(2);
const cube = power(3);

console.log(square(4)); // 16
console.log(cube(4));   // 64
```

---

## 🔹 সংক্ষেপে
- **Closure** = Function + তার চারপাশের scope  
- **ব্যবহার**:
  - ডাটা private রাখা  
  - Reusable function তৈরি করা  
  - Callback/async কোডে state ধরে রাখা  
