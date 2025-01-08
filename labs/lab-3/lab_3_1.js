// Count how many odd, even number(s) in an integer array
let inArr = [1, 2, 3, 4, 5];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < inArr.length; i++) {
    if (inArr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);