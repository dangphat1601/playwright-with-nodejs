const {sortArrMinToMax} = require('./ultils');

let arr1 = [1, 12, 16, 28, 34];
let arr2 = [1, 13, 16, 27, 99];

let mergeArr = [];

for (let i = 0; i < arr1.length; i++) {
    mergeArr.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
    mergeArr.push(arr2[i]);
}

let sortMergeArr = sortArrMinToMax(mergeArr);
console.log(sortMergeArr);

