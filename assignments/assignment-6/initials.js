//1 //
var fullName1 = "john doe";
var fullName2 = "Jane smith";
var fullName3 = "bob Johnson";

var spaceName1 = fullName1.indexOf(" ");

var firstNameInitial = fullName1[0];
var lastNameInitial = spaceName1 + 1;

var lastNameInitial = fullName1[lastNameInitial];
console.log(firstNameInitial);
console.log(lastNameInitial);
var result1 = (firstNameInitial + lastNameInitial).toUpperCase();
console.log(result1);

//  2 //

var spaceName2 = fullName2.indexOf(" ");

var firstNameInitial = fullName2[0];
var lastNameInitial = spaceName2 + 1;

var lastNameInitial = fullName2[lastNameInitial];
console.log(firstNameInitial);
console.log(lastNameInitial);
var result2 = (firstNameInitial + lastNameInitial).toUpperCase();

console.log(result2);

//3 //
var spaceName3 = fullName3.indexOf(" ");

var firstNameInitial = fullName3[0];
var lastNameInitial = spaceName3 + 1;

var lastNameInitial = fullName3[lastNameInitial];
console.log(firstNameInitial);
console.log(lastNameInitial);

var result3 = (firstNameInitial + lastNameInitial).toUpperCase();

console.log(result3);
