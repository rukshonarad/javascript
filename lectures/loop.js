//Write the function that takes two arguments star and end and return the count of numbers between start an end that divisible by 4 and 14
function fourAndFourteen(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 4 === 0 && i % 14 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log(fourAndFourteen(1, 100));
// Write the function that take two arguments, start and end that  return count of numbers which the square is also within the same range.
function squareConut(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter = counter + 1;
        } else {
            break;
        }
    }
    return counter;
}
console.log(squareConut(20, 600));
// 5 Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.

function threeOrFive(start, end) {
    var counter = 0;
    for (var i = start; i < end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
            counter++;
        }
    }
    return counter;
}
console.log(threeOrFive(45, 90));
// //Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by 7.
function divisibleBySeven(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            counter++;
        }
    }
    return counter;
}
console.log(divisibleBySeven(25, 47));
// 16 - 2
//Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by 7.

function arrySeven(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(arrySeven(100, 200));
