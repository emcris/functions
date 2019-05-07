//global scope
var globalVar = 'Hello World';

function sayHello() {
    console.log(globalVar);

    //local/function scope
    var funcVar = 'I\'m scoped inside a function';
    console.log(funcVar);
}

sayHello();
console.log(globalVar);
// console.log(funcVar);  //Can't show because it is defined inside of a function

//block scope
if (true) {
    //let is basically var but allows for reassignment 
    //const stores a constant value only, and cannot be reassigned
    const blockVar = 'I\'m inside a block';
    console.log(blockVar);
}
// console.log(blockVar);

function secondFunction (){
    // console.log(funcVar);
}

secondFunction();

//nested scope
function outerFunction(){
    const outer = 'I\'m defined in outerFunction';
    console.log(outer);

    function innerFunction() {
        const inner = 'I\'m defined in an inner function';
        console.log(inner);
    }

    // innerFunction();
    // console.log(inner);

    return innerFunction;
}
outerFunction()();
