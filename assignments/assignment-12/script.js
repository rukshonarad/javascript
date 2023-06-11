// 1 //
function lengthOfString(str) {
    var result = str.length;
    return result;
}
console.log(lengthOfString("Hello"));

// 2 //

function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}
console.log(concatenateStrings("Hello", "World"));

// 3 //
function toUpperCase(str) {
    var result = str.toUpperCase();
    return result;
}
console.log(toUpperCase("hello"));

// 4 //
function toLowerCase(str) {
    var result = str.toLowerCase();
    return result;
}
console.log(toLowerCase("HELLO"));

// 5 //
function findSubstring(str, sub) {
    var result = str.includes(sub);
    return result;
}
console.log(findSubstring("Hello World", "World"));

// 6 //
function replaceSubstring(str, sub1, sub2) {
    var result = str.replace(sub1, sub2);
    return result;
}
console.log(replaceSubstring("Hello World", "World", "Everyone"));

// 7 //
function charAtPosition(str, position) {
    var result = str[position];
    //var result = str.charAt(position);
    return result;
}
console.log(charAtPosition("Hello", 1));

// 8 //
function trimString(str) {
    var result = str.trim();
    return result;
}
console.log(trimString(" Hello "));

// 9 //
function stringStartsWith(str, sub) {
    var result = str.startsWith(sub);
    return result;
}
console.log(stringStartsWith("Hello", "He"));

// 10 //
function stringEndsWith(str, sub) {
    var result = str.endsWith(sub);
    return result;
}
console.log(stringEndsWith("Hello", "lo"));

// 11 //
function convertStringToNumber(str) {
    var result = parseInt(str);
    return result;
}
console.log(convertStringToNumber("12.34"));
// 12 //
function sliceString(str, start, end) {
    var result = str.slice(start, end);
    return result;
}
console.log(sliceString("Hello World", 0, 5));

// 13 //
function concatenateAndToUpper(str1, str2) {
    var result = str1.concat(str2).toUpperCase();
    return result;
}

console.log(concatenateAndToUpper("hello", "world"));
