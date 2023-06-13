//1
function combineArrays(arr1, arr2, arr3) {
    var arr3 = arr1.concat(arr2);
    return arr3;
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

//2;
function reverseOrder(arr) {
    arr.reverse(arr);
    return arr;
}
console.log(reverseOrder([1, 2, 3, 4, 5]));

//3;
function checkValue(arr, val) {
    if (arr.includes(val)) {
        return true;
    } else {
        false;
    }
}
console.log(checkValue([56, 766, 34], 34));
// //4

function isArray(arr) {
    if (Array.isArray(arr)) {
        return true;
    } else {
        return false;
    }
}
console.log(isArray([10, 25, 35, 44]));

// // 5
function arraySlice(arr, start, end) {
    return arr.slice(start, end);
}
console.log(arraySlice([1, 2, 3, 4, 5, 6, 7], 1, 4));

// // //6
function removeLast(arr) {
    arr.pop();
    return arr;
}
console.log(removeLast(["Sun", "Mon", "Tue", "Wed"]));

// // 7
function removFirst(arr) {
    arr.shift();
    return arr;
}
console.log(removFirst(["book", "note", "pencil"]));

// //8
function addAtBeggining(arr, num) {
    arr.unshift(num);
    return arr;
}
console.log(addAtBeggining([2, 3, 4, 5], 1));

// // 9

function addAtEnd(arr, num) {
    arr.push(num);
    return arr;
}
console.log(
    addAtEnd(["January", "February", "March", "April", "May", "June"], "July")
);
