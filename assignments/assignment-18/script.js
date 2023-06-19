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
