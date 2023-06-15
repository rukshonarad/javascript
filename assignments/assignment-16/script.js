//>>>>>>>>>>>>>>>>>>>>>> 1 - for <<<<<<<<<<<<<<<<<<<<<<<<
function countArray(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
// console.log(countArray(11, 15)); //return [ 11, 12, 13, 14, 15 ]

// >>>>>>>>>>>>>>>>>>>>> 1 - while <<<<<<<<<<<<<<<<<<<<<<<
function countArray(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        arr.push(i);
        i++;
    }
    return arr;
}
// console.log(countArray(11, 15));

// >>>>>>>>>>>>>>>>>>>>>>>>>>> 2 - for <<<<<<<<<<<<<<<<<<<<<<<
function arraySeven(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
// console.log(arraySeven(1, 15)); //return  [ 7, 14 ]

// >>>>>>>>>>>>>>>>>>>>>>>>>> 2 - while <<<<<<<<<<<<<<<<<<<<<<<<
function arraySeven(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        if (i % 7 === 0) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
// console.log(arraySeven(1, 15));

// >>>>>>>>>>>>>>>>>>>> 3 - for <<<<<<<<<<<<<<<<<<
function threeAndFive(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
// console.log(threeAndFive(1, 10)); //return [ 3, 5, 6, 9, 10 ]

// >>>>>>>>>>>>>>>>>>> 3 - while <<<<<<<<<<<<<<<<<<<<<
function threeAndFive(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
// console.log(threeAndFive(1, 10));

//>>>>>>>>>>>>>>>>>>>>> 4- for <<<<<<<<<<<<<<<<<<<<<

function squareInRange(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        var square = i * i;
        if (square >= start && square <= end) {
            arr.push(i);
        }
    }
    return arr;
}
// console.log(squareInRange(1, 15));

//>>>>>>>>>>>>>>>>>> 4 - whith <<<<<<<<<<<<<<<<<<<<
function squareInRange(start, end) {
    var arr = [];
    var i = start;
    with (i <= end) {
        var square = i * i;
        if (square >= start && square <= end) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
// console.log(squareInRange(1, 15));

//>>>>>>>>>>>>>>> 5 - for<<<<<<<<<<<<<<<<<<
function threeOrFive(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(threeOrFive(1, 61));
//return[
// 3, 5, 6, 9, 10, 12, 18, 20, 21, 24, 25, 27, 33, 35, 36, 39, 40, 42, 48, 50,
///51, 54, 55, 57
//]

// >>>>>>>>>>>>>>>>>>> 5 - while <<<<<<<<<<<<<<<<<<<<<
function threeOrFive(start, end) {
    var arr = [];
    var i = start;
    while (i <= end) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(threeOrFive(1, 61));
