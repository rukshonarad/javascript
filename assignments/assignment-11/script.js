// 1 //
function addTwo(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log("7 + 5 =", addTwo(7, 5));

// 2 //

function multiplyTwo(num1, num2) {
    var sum = num1 * num2;
    return sum;
}
console.log("3 * 2 = ", multiplyTwo(3, 2));

// 3 //

function isOdd(num) {
    var sum = num % 2 !== 0;
    return sum;
}
console.log(5 % 2 !== 0);

// 4 //
function subtractTwo(num1, num2) {
    var subtraction = num2 - num1;
    return subtraction;
}
console.log(30 - 15, subtractTwo(30, 15));

// 5 //
function divideTwo(num1, num2) {
    if (num2 !== 0) {
        var devision = num1 / num2;
        return devision;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
console.log("30 / 2 =", divideTwo(30, 2));

// 6 //
function isEven(num) {
    var sum = num % 2 === 0;
    return sum;
}
console.log("Number 4 is even:", isEven(4));

//  7  //
function maxValue(num1, num2) {
    var result;
    if (num1 > num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}
console.log("Large number of 3 and 7 is:", maxValue(3, 7));

//  8 //
function minValue(num1, num2) {
    var result;
    if (num1 < num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}
console.log("Small number of 3 and 7 is:", minValue(3, 7));

//  9 //
function absoluteValue(num) {
    var result = Math.abs(num);
    return result;
}
console.log("Absolute value of -5 is:", absoluteValue(-5));

//  10 //
function roundNumber(num) {
    var result = Math.round(num);
    return result;
}
console.log("Round value of 4.5 is:", roundNumber(4.5));

// 11 //
function ceilNumber(num) {
    var result = Math.ceil(num);
    return result;
}
console.log("Ceil value of 4.1 is:", ceilNumber(4.1));

// 12 //
function floorNumber(num) {
    var result = Math.floor(num);
    return result;
}
console.log("Floor value of 4.9 is:", floorNumber(4.9));

// 13 //
function modulus(num1, num2) {
    if (num2 !== 0) {
        var result = num1 % num2;
        return result;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
console.log("10 % 3 =", modulus(10, 3));

// 14 //
function power(num, exponent) {
    var result = Math.pow(num, exponent);
    return result;
}
console.log("4^5 = ", power(4, 5));

// 15 //
function squareRoot(num) {
    if (num >= 0) {
        var result = Math.sqrt(num);
        return result;
    } else {
        return "Error: Square root of negative number is not allowed!";
    }
}
console.log("√16 =", squareRoot(16));
