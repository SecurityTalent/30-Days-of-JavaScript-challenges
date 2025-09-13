Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10
 



ব্যাখ্যা:

১. createHelloWorld ফাংশনটি:
এটি একটি ফাংশন যা আবার একটি ফাংশন রিটার্ন করে।
অর্থাৎ, যখন তুমি createHelloWorld() কল করবে, তখন এটি তোমাকে একটি নতুন ফাংশন দিবে।

২. const fn = createHelloWorld();
এখানে, তুমি createHelloWorld() কল করলে একটি ফাংশন পাবে, সেটাকে fn নামক ভেরিয়েবলে রাখলে।
fn এখন সেই ফাংশন যা "Hello World" রিটার্ন করে।

৩. console.log(fn());
এখানে তুমি fn() কল করছো, অর্থাৎ সেই ফাংশনটি চালাচ্ছো, যা "Hello World" রিটার্ন করবে। তারপর সেটা console.log দিয়ে প্রিন্ট করো।