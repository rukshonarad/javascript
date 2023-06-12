//1
function combineArrays(arr1, arr2, arr3) {
    var arr3 = arr1.concat(arr2);
    return arr3;
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

2;
function reversOrder(arr) {
    var result = arr.toReversed();
    return result;
}

// console.log(reversOrder([1, 2, 3, 4, 5]));
// 3
function checkValue(arr, val) {
    if (arr.includes(val)) {
        return true;
    } else false;
}
console.log(checkValue([56, 766, 34], 34));
4;
function isArray(arr) {
    if (Array.isArray(arr)) {
        return true;
    } else false;
}
console.log(isArray([10, 25, 35, 44]));
// 5
function arraySlice(arr, start, end) {
    return arr.slice(start, end);
}
console.log(arraySlice([1, 2, 3, 4, 5, 6, 7], 1, 4));
//6
function removeLast(arr) {
    var result = arr.pop();
    var result = arr;
    return result;
}
console.log(removeLast(["Sun", "Mon", "Tue", "Wed"]));

// // 7
function removFirst(arr) {
    var result = arr.shift();
    var result = arr;
    return result;
}
console.log(removFirst(["book", "note", "pencil"]));
//8
function addAtBeggining(arr, num) {
    var result = arr.unshift(num);
    var result = arr;
    return result;
}
console.log(addAtBeggining([2, 3, 4, 5], 1));

// 9

function addAtEnd(arr, num) {
    var result = arr.push(num);
    var result = arr;
    return result;
}
console.log(
    addAtEnd(["January", "February", "March", "April", "May", "June"], "July")
);
