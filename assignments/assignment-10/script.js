// //
var total = Math.floor(Math.random() * 86400);
var hours = Math.floor(total / 3600);
var remaining = Math.floor(total % 3600);
var minutes = Math.floor(remaining / 60);
var seconds = remaining % 60;

var formattedHours = hours,
    formattedMinutus = minutes,
    formattedSeconds = seconds;
// //
if (hours < 10) {
    formattedHours = "0" + hours;
}

if (minutes < 10) {
    formattedMinutus = "0" + minutes;
}

if (seconds < 10) {
    formattedSeconds = "0" + seconds;
}
// Result //

var timestamp = `${formattedHours}:${formattedMinutus}:${formattedSeconds}`;
console.log(timestamp);

if (hours < 12) {
    console.log("Good morning!");
} else if (hours >= 12 && hours <= 17) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
