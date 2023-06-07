// Firs part //
var number1 = Math.floor(Math.random() * 10) + 1;

if (number1 >= 1 && number1 <= 3) {
    console.log("Bob");
} else if (number1 <= 4 && number1 <= 7) console.log("Martin");
else {
    console.log("Jennifer");
}
//Second Part //
var vinner = "Rukhshona";

var name = Math.floor(Math.random() * 4 + 1);
if (name === 1) {
    console.log(
        `Dear ${vinner}, wishing you a day filled with happiness and a year filled with joy`
    );
} else if (name === 2) {
    console.log(
        `Dear ${vinner}, sending you smiles for every moment of your special day.`
    );
} else if (name === 3) {
    console.log(`Dear ${vinner}, have a wonderful time and a very happy day!`);
} else {
    console.log(
        `Dear ${vinner}, hope your special day brings you all that your heart desires!`
    );
}
