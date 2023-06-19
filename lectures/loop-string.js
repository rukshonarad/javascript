var fruits = ["apple", "banana", "mango", "orange", "peach"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[2]); // Output: mango
}

var numbers = [10, 20, 30, 40, 50];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // Output: 150

var fruits = ["apple", "banana", "mango", "orange", "peach"];
for (var i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
var letters = ["a", "b", "c", "a", "d", "a"];
var count = 0;
var letterToCount = "a";
for (var i = 0; i < letters.length; i++) {
    if (letters[i] === letterToCount) {
        count++;
    }
}
console.log(count);
