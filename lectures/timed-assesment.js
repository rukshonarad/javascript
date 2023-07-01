//Assignment 1: Fizz Buzz
function fizzBuzz(number) {
    for (let i = 0; i < number; i++) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "FizzBuzz";
        } else if (number % 5 === 0) {
            return "Buzz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else {
            return number;
        }
    }
}
console.log(fizzBuzz(15));
console.log(fizzBuzz(12));
console.log(fizzBuzz(10));
console.log(fizzBuzz(7));

// Assignment 2: Palindrome Checker

function isPalindrome(word) {
    let palindrome = "";
    for (let i = word.length - 1; i >= 0; i--) {
        palindrome += word[i];
    }
    if (word.toLowerCase() === palindrome.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("level"));
console.log(isPalindrome("openAI"));
console.log("-------------");

//Assignment 3: Array Filter
function filterArray(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        if (str.length <= num) {
            result.push(str);
        }
    }

    return result;
}
console.log(
    filterArray(["apple", "banana", "cherry", "dates", "elderberry"], 5)
);

//Assignment 4: Array of Objects
function stringsToObjects(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj[arr[i]] = arr[i].length * arr[i].length;
        newArr.push(obj);
    }
    return newArr;
}
console.log(stringsToObjects(["cat", "window", "prop"]));

//Asignment 5: Key-Value Multiplication
function keyValueMultiplication(obj) {
    let result = {};
    for (let word in obj) {
        let newKey = word + obj[word];
        let newValue = word.length * obj[word].length;
        result[newKey] = newValue;
    }
    return result;
}

console.log(keyValueMultiplication({ apple: "fruit", car: "vehicle" }));

// Assignment 6: Array Operations

function arrayOperations(arr1, arr2) {
    let result = {
        added: [],
        multiplied: []
    };

    for (let i = 0; i < arr1.length; i++) {
        result.added.push(arr1[i] + arr2[i]);
        result.multiplied.push(arr1[i] * arr2[i]);
    }

    return result;
}

console.log(arrayOperations([1, 2, 3], [4, 5, 6]));
