// Basic If Statement

let number1 = 10;

if (number1 > 5) {
    console.log("The number is greater than 5");
}

// If-Else Statement

let number2 = -3;

if (number2 >= 0) {
    console.log("The number is positive or zero");
} else {
    console.log("The number is negative");
}

// Nested If Statements


let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
} else {
    if (hour < 18) {
        console.log("Good afternoon!");
    } else {
        console.log("Good evening!");
    }
}
