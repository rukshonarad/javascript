// 1. Creating User Profiles
function printUserProfile(userProfile) {
    for (let key in userProfile) {
        console.log(`${key}: ${userProfile[key]}`);
    }
}
console.log(
    printUserProfile({
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        isAdmin: true
    })
);
// 2. Updating Inventory
function addStock(inventory, newInventory) {
    for (let item in newInventory) {
        if (inventory[item] !== undefined) {
            inventory[item] += newInventory[item];
        } else {
            inventory[item] = newInventory[item];
        }
    }
    return inventory;
}
console.log(
    addStock(
        { apple: 5, banana: 3, orange: 2 },
        { banana: 2, orange: 3, peach: 5 }
    )
);
// 3. Filtering Properties
let info = {
    city: "New York",
    state: "New York",
    country: "USA",
    pincode: "10001"
};
function filterData(object, key) {
    return { [key]: object[key] };
}
console.log(filterData(info.city));
// 4. Checking the Perfect Score
function perfectScore(students) {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.score === 100) {
            return true;
        }
    }
    return false;
}
console.log(
    perfectScore([
        { name: "John", score: 98 },
        { name: "Jane", score: 100 },
        { name: "Bob", score: 95 }
    ])
);

// 5. Counting Occurrences
function countOccurrence(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}
console.log(countOccurrence("banana"));
// 6. Calculating Average Score
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function averageScore(scores) {
    let averageScores = {};
    for (let student in scores) {
        const averageScore = calculateAverage(scores[student]);
        averageScores[student] = averageScore;
    }
    return averageScores;
}
console.log(
    averageScore(
        { Adam: [80, 90, 85], Eve: [88, 92, 89] },
        { John: [85, 90, 78], Jane: [92, 88, 91] }
    )
);
// 7. Finding Largest Number
function findLargest(ages) {
    let oldest = "";
    let maxAge = 0;
    for (let person in ages) {
        if (ages[person] > maxAge) {
            maxAge = ages[person];
            oldest = person;
        }
    }
    return oldest;
}
console.log(findLargest({ John: 30, Jane: 32, Bob: 28 }));
// 8. Reversing Key-Value Pairs
function reverseKeyValue(object) {
    let reversed = {};
    for (let key in object) {
        reversed[object[key]] = key;
    }
    return reversed;
}
console.log(reverseKeyValue({ name: "John", age: 30 }));
// 9. Counting Boolean Values
function countBooleans(array) {
    let count = { true: 0, false: 0 };
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        count[value]++;
    }
    return count;
}
console.log(countBooleans([true, false, true, true, false]));
// 10. Calculating Total Price
function calculateTotal(prices, items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        total += prices[item];
    }
    return total;
}
console.log(
    calculateTotal({ apple: 1, banana: 0.5, orange: 0.75 }, ["apple", "banana"])
);
