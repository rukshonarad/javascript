//1
function printNumbers1() {
    for (var i = 11; i <= 99; i++) {
        console.log(i);
    }
}
printNumbers1();

//2
function printNumber2() {
    for (var i = 6; i <= 76; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}
printNumber2();
3;
function printNumber3() {
    for (var i = 1; i <= 99; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}
printNumber3();
// 4
function printNumber4() {
    for (var i = 20; i <= 40; i++) {
        var square = i * i;
        console.log(square);
    }
}
// printNumber4();
//5
function printNumber5() {
    for (var i = 1; i <= 99; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
            console.log(i);
        }
    }
}
printNumber5();
