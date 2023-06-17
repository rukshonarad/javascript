//1. Write a function findCharFrequency that accepts a string and a character as arguments. This function should iterate through the string using a for loop and count the frequency of the specified character, then return this count.
function findCharFrequency(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(
    "How many character -l in the string - hello world:",
    findCharFrequency("hello world", "l")
);
//2. Create a function vowelCounter that takes in a string and returns the count of vowels in it.
function vowelCounter(str) {
    var count = 0;
    var vaweles = "aeiou";
    for (var i = 0; i < str.length; i++) {
        if (vaweles.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(vowelCounter("wesome"));

// 3. Create a function isAlphaNumeric that checks whether a given string only contains English letters and digits.

function isAlphaNumeric(str) {
    var englishLetterDigits = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < str.lenght; i++) {
        if (englishLetterDigits.includes(str[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}
console.log(isAlphaNumeric("hello456"));
console.log(isAlphaNumeric("hello456%7"));

//4. Write a function isAllVowels that verifies if a string consists only of vowel characters.
function isAllVowel(str) {
    var count = 0;
    var vowels = "aeiou";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    if (count === str.length) {
        return true;
    } else {
        return false;
    }
}
console.log(isAllVowel("aueo")); // 4 => true. if number of vowels is equal to str.length => true;
console.log(isAllVowel("aaaaaaaooooooiiiieeeekj")); // 2 => false

//4. Write a function isAllVowels that verifies if a string consists only of vowel characters.
function isAllVowel2(str) {
    var cons = "qwertypsdfghjklzxvbnm";
    for (var i = 0; i < str.length; i++) {
        if (cons.includes(str[i])) {
            return false;
        }
    }
    return true;
}

console.log(isAllVowel2("aueo"));
//5. Construct a function capitalizeVowels that changes all vowels in a lowercase string to uppercase.
function apitalizeVowels(str) {
    var result = "";
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.lenght; i++) {
        var char = str[i];
        if (vowels.includes(char)) {
            result = result + char.toUpperCase();
        } else {
            result = result + char;
        }
    }
    return result;
}
console.log("hello");
//6. Build a function sliceFromFirstVowel that returns a substring starting from the first vowel to the end of the original string.
function sliceFromFirstVowel(str) {
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var vowels = "aeiou";
        if (vowels.includes(char)) {
            return str.slice(i);
        }
    }
    return "There is no vowels in this string";
}
console.log(sliceFromFirstVowel("muslim"));

//7. Create a function areConsonantsMore that returns true if the number of consonants in a string is higher than the number of vowels.
function areConsonantsMore(str) {
    var countVowel = 0;
    var countConsonants = 0;
    var vowels = "aeiou";
    var consonants = "bgdrwtyxwyz";
    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            countVowel++;
        } else {
            countConsonants++;
        }
    }

    return countConsonants > countVowel;
}
console.log(areConsonantsMore("boolen"));

// //8. Implement a function doubleVowels that doubles all the vowels in a given string.

function capitalizeVowel(str) {
    var result = "";
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowels.includes(char)) {
            result = result + char.toUpperCase();
        } else {
            result = result + char;
        }
    }
    return result;
}
capitalizeVowel("samarkand");

//9. Write a function sumDigits that takes any valid integer and returns the sum of its digits.
//sumDigits(12345);
// Output: 15
// Explanation: The sum of the digits in the number 12345 is 1+2+3+4+5, which equals 15.

function sumDigits(num) {
    var numString = num.toString();
    var sum = 0;
    for (var i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }

    return sum;
}

console.log(sumDigits(12345));

//10. Create a function preserveLetters that takes a string of a single word and returns a new string with all characters except letters removed.
//preserveLetters("Hello,123");
// Output: 'Hello'
// Explanation: The function removes all characters in 'Hello,123' that are not letters, resulting in the new string 'Hello'.

function preserveLetters(str) {
    var preserved = "";
    for (var i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            preserved += str[i];
        }
    }

    return preserved;
}

console.log(preserveLetters("Hello, 123"));
// 10- 2
function preserveLetters(str) {
    var preserved = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var englishLetters = "abcdefghijklmnopqrstuvwxyz";
        if (englishLetters.includes(char.toLowerCase())) {
            preserved += char;
        }
    }

    return preserved;
}

console.log(preserveLetters("Hello, 123"));
