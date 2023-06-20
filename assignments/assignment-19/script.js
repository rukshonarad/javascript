// 1. Create a function splitByComma(str) that takes a string str as an argument. This function should split the input string into an array by using a comma as the delimiter.
// Example Input: "apple,banana,grape"
// Example Output: ["apple", "banana", "grape"]
// Example Input: "red,green,blue,yellow"
// Example Output: ["red", "green", "blue", "yellow"]

function splitByComma(str) {
    return str.split(",");
}
console.log(splitByComma("apple,banana,grape"));
console.log(splitByComma("red,green,blue,yellow"));

//2. Create a function joinWithDash(arr) that takes an array arr as an argument. The function should join all the elements of the array into a single string with each element separated by a dash "-".

function joinWithDash(arr) {
    var result = arr.join("-");
    return result;
}
console.log(joinWithDash(["sun", "moon", "stars"]));
console.log(joinWithDash(["quick", "brown", "fox"]));

//3. Create a function splitSentenceIntoWords(sentence) that takes a sentence as an argument. The function should split the sentence into an array of words. Assume words in the sentence are separated by spaces.

// function splitSentenceIntoWords(sentence) {
//     return sentence.split(" ");
// }
// console.log(splitSentenceIntoWords("The quick brown fox"));
// console.log(splitSentenceIntoWords("Hello World from JavaScript"));

//4. Create a function createCamelCase(str) that takes a string str as an argument. The string contains words separated by spaces. The function should return a camelCase version of the string.

// Example Input: "Hello world"
// Example Output: "helloWorld"
// Example Input: "first name"
// Example Output: "firstName"

function createCamelCase(str) {
    var words = str.split(" ");
    var camelCase = words[0].toLowerCase();
    for (var i = 1; i < words.length; i++) {
        var capitalized = words[i].toUpperCase(0);
        camelCase += capitalized;
    }
    return camelCase;
}
console.log(createCamelCase("Hello world"));
console.log(createCamelCase("first name"));

//5. Create a function splitAndReverse(str, separator) that takes a string str and a separator as arguments. The function should split the string using the separator, reverse the obtained array and then join it back into a string using the separator.
// Example Input: ("one-two-three", "-")
// Example Output: "three-two-one"
// Example Input: ("front middle back", " ")
// Example Output: "back middle front"

function splitAndReverse(str, separator) {}
