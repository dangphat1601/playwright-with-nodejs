/* Get input from user about height(m) and weight(kg) then calculate BMI
Underweight: <18.5
Normal weight: 18.5 – 24.9
Overweight: 25–29.9
Obesity: BMI of 30 or greater
BMI = weight / (height x height)
*/

const readLine = require('readline-sync');
let height = Number(readLine.question('Your height (m): '));
let weight = Number(readLine.question('Your weight (kg): '));

let BMI = weight / (height * height);
BMI = BMI.toFixed(2);

if (BMI < 18.5) {
    console.log(`Underweight: ${BMI}`);
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(`Normal weight: ${BMI}`);
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log(`Overweight: ${BMI}`);
} else {
    console.log(`Obesity: ${BMI}`);
}