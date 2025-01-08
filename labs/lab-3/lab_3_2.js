// Finding maximum value/minimum value from an integer array
let inArr = [-1, 1, 2, 3, 4, 5, -6];

let min = inArr[0];
let max = inArr[0];

for (let i = 0; i < inArr.length; i++) {
    if (inArr[i] < min) {
        min = inArr[i];
    } if (inArr[i] > max) {
        max = inArr[i];
    }
}

console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);
