//1 - for
function argumentCount(start, end) {
    return end - start + 1;
}
// console.log(argumentCount(37, 85));

//1 - while
function countNum(start, end) {
    var counter = 0;
    var i = start;
    while (i <= end) {
        counter++;
        i++;
    }
    return counter;
}
// console.log(countNum(37, 85)); //return 45

//2 - for
function divisibleBySeven(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            counter++;
        }
    }
    return counter;
}
// console.log(divisibleBySeven(27, 56));
// 2 - while
function divisibleBySeven(start, end) {
    var counter = 0;
    var i = start;
    while (i <= end) {
        if (i % 7 === 0) {
            counter++;
        }
        i++;
    }
    return counter;
}
// console.log(divisibleBySeven(27, 56)); // return 5

// 3 - for
function threeAdnFive(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            counter++;
        }
    }
    return counter;
}
// console.log(threeAdnFive(300, 500));

// 3 - while
function threeAdnFive(start, end) {
    var counter = 0;
    var i = start;
    while (i <= end) {
        if (i % 3 === 0 && i % 5 === 0) {
            counter++;
        }
        i++;
    }
    return counter;
}
// console.log(threeAdnFive(300, 500)); //return 14

// 4 - for
function squareCount(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter++;
        }
    }
    return counter;
}
//console.log(squareCount(1, 80));   //return 8

// 4 - while
function squareConut(start, end) {
    var counter = 0;
    var i = start;
    while (i <= end) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter++;
        }
        i++;
    }
    return counter;
}
// console.log(squareConut(1, 80));

// 5 - for
function threeOrFive(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter++;
        }
    }
    return counter;
}
//console.log(threeOrFive(1, 16)); // return 6

// 5 - while
function threeOrFive(start, end) {
    var counter = 0;
    var i = start;
    while (i <= end) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter++;
        }
        i++;
    }
    return counter;
}
console.log(threeOrFive(1, 16));
