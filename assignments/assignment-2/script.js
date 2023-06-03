console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 6); // true

// Logical Operators

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log(true && false) || true; // true
console.log(!false && true) || false; // true
// Combining Logical and Comparison Operators

console.log(5 > 3 && 2 == "2"); //true && true // true
console.log(5 !== "5" && 6 <= 10); // true && true // true
console.log(3 === "3" || 7 > 10); // false || false // false
console.log(4 < 2 || 3 !== "3"); // false || true // true
console.log(!(5 > 3 && 2 == "2")); // false && true // false
console.log(!(3 === "3" || 7 > 10)); // true || false// true
console.log(5 > 3 && !(2 === "2")) || 4 !== "4"; //true && true // true
console.log(7 >= "7" || (!(9 < 11) && 2 !== "2")); // true || false // true && true // true

// More Complex Examples

console.log(5 > 3 && 2 == "2" && 7 < 10); // true && true // true && true // true
console.log(5 !== "5" && 6 <= 10 && 2 === 2); //true && true //true && true // true
console.log(3 === "3" || 7 > 10 || 4 !== 4); // false || false // false || false //false
console.log(4 < 2 || 3 !== "3" || 5 == "5"); // false || true // true || true // true
console.log(!((5 > 3 && 2 == "2") || 9 === "9")); // (true && true) // true || false // false
console.log(!(3 === "3" || (7 > 10 && 5 !== 5))); // true || (false && false ) // true
console.log(5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8); //  (true && true) //true || (true && true)//true
console.log(7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3"); // true || (false && true ) //true ||true// true
