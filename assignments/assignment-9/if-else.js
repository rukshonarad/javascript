// Firs part //
var number1 = Math.floor(Math.random() * 10) + 1;

var name;
if (number1 >= 1 && number1 <= 3) {
    name = "Bob";
} else if (number1 <= 4 && number1 <= 7) {
    name = "Martin";
} else {
    name = "Jennifer";
}
//Second Part //

var number2 = Math.floor(Math.random() * 4 + 1);
if (number2 === 1) {
    console.log(
        "Dear " +
            name +
            ", wishing you a day filled with happiness and a year filled with joy."
    );
} else if (number2 === 2) {
    console.log(
        "Dear " +
            name +
            ", sending you smiles for every moment of your special day."
    );
} else if (number2 === 3) {
    console.log(
        "Dear " + name + ", have a wonderful time and a very happy day!"
    );
} else {
    console.log(
        "Dear " +
            number2 +
            ", hope your special day brings you all that your heart desires!"
    );
}
