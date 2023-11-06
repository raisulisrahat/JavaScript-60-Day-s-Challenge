// For loop 

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// While loop

let count = 0;

while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// Demonstrating break and continue statements

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Skips the current iteration
    }
    if (i === 7) {
        break; // Exits the loop
    }
    console.log(i);
}
