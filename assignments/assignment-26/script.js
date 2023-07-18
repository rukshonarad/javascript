// // 1 //
// function charPair(str) {
//     let sum = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             sum.push(str[i] + str[j]);
//         }
//     }
//     return sum;
// }
// console.log(charPair("abc"));
// Expected output: ['ab', 'ac', 'bc']
// // 2 //
// function divisibleByThreePairSum(array) {
//     const result = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if ((array[i] + array[j]) % 3 === 0) {
//                 result.push([i, j]);
//             }
//         }
//     }

//     return result;
// }

// console.log(divisibleByThreePairSum([1, 2, 3, 4, 5]));
// // Expected output: [[0, 1], [1, 3], [0, 4], [3, 4]]
// // 3 //
// function sumOfPairs(arr, target) {
//     let sum = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 sum.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return sum;
// }
// console.log(sumOfPairs([1, 2, 3, 4, 5], 5));

// // Expected output: [[1, 4], [2, 3]]

// // 4 //
function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime(7));
// // Expected output: true
// console.log(checkPrime(1));
// // Expected output: false

// // 5 //
function primeRange(arr) {
    let primesAndCount = {};
    let primes = [];
    for (let i = arr[0] + 1; i < arr[1]; i++) {
        if (checkPrime(i)) {
            primes.push(i);
        }
    }
    primesAndCount.primes = primes;
    primesAndCount.count = primes.length;
    return primesAndCount;
}

console.log(primeRange([10, 20]));
// Expected output: {primes: [11, 13, 17, 19], count: 4}

// // 6 //
function allSubstrings(str) {
    const result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;
}

console.log(allSubstrings("abc"));
// Expected output: ['a', 'ab', 'abc', 'b', 'bc', 'c']
