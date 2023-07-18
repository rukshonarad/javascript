// // 1. Find the Maximum Number
// function findMaxNumber(arr) {
//     let maxNum = arr[0][0];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > maxNum) {
//                 maxNum = arr[i][j];
//             }
//         }
//     }
//     return maxNum;
// }
// let input = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let maxNumber = findMaxNumber(input);
// console.log("Maximum number:", maxNumber);
// // Output: Maximum number: 9

// //  2.  Count Characters//
// function countCharacters(arr) {
//     let charCout = {};
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             let char = arr[i][j];
//             if (charCout[char]) {
//                 charCout[char]++;
//             } else {
//                 charCout[char] = 1;
//             }
//         }
//     }
//     return charCout;
// }
// console.log(
//     countCharacters([
//         ["a", "b", "a"],
//         ["c", "a", "d"]
//     ])
// );

// // Output: { a: 3, b: 1, c: 1, d: 1 }

// // 3. Filter Divisible Numbers//
// function filterDivisibleByThree(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             let char = arr[i][j];
//             if (char % 3 === 0) {
//                 newArr.push(char);
//             }
//         }
//     }
//     return newArr;
// }
// console.log(
//     filterDivisibleByThree([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ])
// );

// //Output: [3, 6, 9]

// // 4. Find the Longest String
// function findLongestString(arr) {
//     let longestStr = "";
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             let char = arr[i][j];
//             if (char.length > longestStr.length) {
//                 longestStr = char;
//             }
//         }
//     }
//     return longestStr;
// }
// console.log(
//     findLongestString([
//         ["apple", "banana"],
//         ["carrot", "date", "eggplant"],
//         ["fig"]
//     ])
// );
// // Output: egplant

// //5. Sum of Numbers (including nested arrays)
// function sumArray(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 sum += arr[i][j];
//             }
//         } else {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// console.log(sumArray([1, 2, [3, 4, 5, 6], 7, [8, 9]]));

// //Output: 45;

// //6. Capitalize Strings
// function capitalizeArr(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let capitalizeSubArr = [];
//         for (let j = 0; j < arr[i].length; j++) {
//             let char = arr[i][j].toUpperCase();
//             capitalizeSubArr.push(char);
//         }
//         newArr.push(capitalizeSubArr);
//     }
//     return newArr;
// }
// let arr = [["apple", "banana"], ["carrot", "date"], ["eggplant"]];
// console.log(capitalizeArr(arr));

//Output: [['APPLE', 'BANANA'], ['CARROT', 'DATE'], ['EGGPLANT']]

// 7. Find Minimum and Maximum Arrays
function findMinMaxArrays(arr) {
    if (arr.length === 0) {
        return { min: [], max: [] };
    }

    let minSum = Infinity;
    let maxSum = -Infinity;
    let minArray = [];
    let maxArray = [];

    for (let i = 0; i < arr.length; i++) {
        const innerArray = arr[i];
        let sum = 0;

        for (let j = 0; j < innerArray.length; j++) {
            sum += innerArray[j];
        }

        if (sum < minSum) {
            minSum = sum;
            minArray = innerArray;
        }

        if (sum > maxSum) {
            maxSum = sum;
            maxArray = innerArray;
        }
    }

    return { min: minArray, max: maxArray };
}

console.log(findMinMaxArrays[([1, 2, 3], [4, 5], [6, 7, 8, 9])]);
// 8//
function mergeNestedArrays(arr) {
    const mergedArray = [];

    for (let i = 0; i < arr.length; i++) {
        const innerArray = arr[i];

        for (let j = 0; j < innerArray.length; j++) {
            mergedArray.push(innerArray[j]);
        }
    }

    return mergedArray;
}
console.log(
    mergeNestedArrays([
        [1, 2],
        [3, 4],
        [5, 6]
    ])
);
