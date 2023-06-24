// 1
// Using let
let length1 = 5;
let width1 = 7;
let area1 = length1 * width1;
console.log(`The area of rectengel is ${area1}`);

length1 = 7;
width1 = 12;
area1 = length1 * width1;
console.log(`The area of the rectangle is now ${area1}`);

// Using const
const length2 = 5;
const width2 = 7;
const area2 = length2 * width2;
console.log(`The area of rectengel is ${area2}`);

length2 = 7;
width2 = 12;
area2 = length2 * width2;
console.log(`The area of the rectangle is now ${area2}`); //TypeError: Assignment to constant variable.

// Part 2

console.log(myFunctionDeclaration());

function myFunctionDeclaration() {
    return "This is a function declaration!";
}

console.log(myFunctionExpression());

var myFunctionExpression = function () {
    return "This is a function expression!";
};

// Part 3
var myVar = "I'm a global";
function someFunction() {
    var myVar = "I'm function scope!";
    if (true) {
        let myVar = "I'm a block scope!"; //
        console.log(myVar);
    }
    console.log(myVar);
}
someFunction();
console.log(myVar);
