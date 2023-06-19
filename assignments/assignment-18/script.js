// 1. String Index Multiplier
// Create a function named stringIndexMultiplier that accepts an array of strings as an argument. This function should return the total sum of the product of each string's length and its index in the array.

function stringIndexMultiplier(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].length * i;
    }
    return sum;
}
console.log(stringIndexMultiplier(["Hello", "World", "!"])); // Output 7

//2. Create a function named divisibilityFilter that accepts an array of numbers as an argument. The function should return a new array that only includes the numbers from the original array that are divisible by 3 or 5, but not both.

function divisibilityFilter(num) {
    var sum = [];
    for (var i = 0; i < num.length; i++) {
        var counter = num[i];
        if (
            (counter % 3 === 0 && counter % 5 !== 0) ||
            (counter % 3 !== 0 && counter % 5 === 0)
        ) {
            sum.push(counter);
        }
    }
    return sum;
}
console.log(divisibilityFilter([3, 5, 15, 18, 20, 30])); //Output [ 3, 5, 18, 20 ]

//3. Create a function named singleDigitSum that accepts an array of numbers as an argument. This function should return the sum of all numbers in the array that have only one digit. Note that the numbers can be both positive and negative.
function singleDigitSum(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        var counter = Math.abs(num[i]);
        if (counter >= 0 && counter < 10 && Number.isInteger(counter)) {
            sum += num[i];
        }
    }
    return sum;
}
console.log(singleDigitSum([-10, 1, -2, 30, 6, -7]));
console.log(singleDigitSum([]));

///4.Create a function named binaryCounter that accepts an array of 0s and 1s as an argument. The function should return a two-element array showing the count of 0s and 1s in the original array, in the form: [numberOfZeroes, numberOfOnes].

function binaryCounter(arr) {
    var numberOfZeroes = 0;
    var numberOfOnes = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            numberOfZeroes++;
        } else if (arr[i] === 1) {
            numberOfOnes++;
        }
    }

    return [numberOfZeroes, numberOfOnes];
}
console.log(binaryCounter([0, 1, 0, 1, 1, 0, 0, 1])); //Output [ 4, 4 ]

// 5. Create a function named uniqueStringFilter that accepts an array of strings as an argument. The function should return a new array that includes only unique strings from the original array. Note that strings are considered the same regardless of case, so "Hello" and "hello" should be treated as duplicates.
function uniqueStringFilter(arr) {
    var str = [];
    var lowerCaseArr = [];
    for (var i = 0; i < arr.length; i++) {
        var lowerCaseWord = arr[i].toLowerCase();
        if (!lowerCaseArr.includes(lowerCaseWord)) {
            lowerCaseArr.push(lowerCaseWord);
            str.push(arr[i]);
        }
    }
    return str;
}
console.log(
    uniqueStringFilter([
        "Hello",
        "hello",
        "World",
        "World",
        "WORLD",
        "hello",
        "HELLO",
        "Test",
        "Test"
    ])
);

//6.Create a function named oddNumberSum that accepts an array of numbers as an argument. The function should return the sum of all odd numbers in the array.
function oddNumberSum(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            sum += num[i];
        }
    }
    return sum;
}
console.log(oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 7. Create a function named reverseString that accepts a an array of english letters as an argument. Return a new reversed array. Do not use reverse() or toReversed() methods.

function reverseString1(arr) {
    reversedArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(reverseString1(["H", "e", "l", "l", "o"]));

//8 . Create a function named calculateFactorial that accepts a number as an argument. The function should return the factorial of the number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

function calculateFactorial(num) {
    sum = 1;
    for (var i = 1; i <= num; i++) {
        sum = sum * i;
    }
    if (num === 0) {
        return 1;
    }
    return sum;
}
console.log(calculateFactorial(5));

// 9. Task: Create a function named arrayElementMultiplier that accepts an array of numbers. The function should return a new array where each element is twice the value of the corresponding element in the original array.

function arrayElementMultiplier(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
console.log(arrayElementMultiplier([1, 2, 3, 4, 5]));

// 10 Create a function named evenIndexSum that accepts an array of numbers as an argument. The function should return the sum of numbers which are located at even indices in the array.

function evenIndexSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i = i + 2) {
        sum += arr[i] * 2;
    }
    return sum;
}

console.log(evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
