// Allow user to input a number, print out it’s an odd or even number

const readLine = require('readline-sync');

let number = Number(readLine.question('Input a number: '));

if (number % 2 == 0) {
    console.log("This is an even number");
} else {
    console.log("This is an odd number");
}