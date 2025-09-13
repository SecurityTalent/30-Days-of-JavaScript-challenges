
// Day 01 Problems Closures
// create-hello-world-function

function createHelloWorld() {
    return function(){
        return "Hello World";
    }
}

const fn = createHelloWorld();
console.log(fn());



