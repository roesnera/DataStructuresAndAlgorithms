"use strict";
function insertionSort(arr) {
    // iterating over every element of the array
    for (let i = 1; i < arr.length; i++) {
        // grabbing the current value for comparisons
        let current = arr[i];
        // this loop works backwards from the element immediately to the left of i
        // it will continue iterating until the value at j is no longer greater than the value at i
        // or it reaches the first index position
        // each iteration, it swaps the element at j one to the right, 
        // and the element at j+1 (which should always be the element at i) to the left
        for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
            [arr[j], arr[j + 1]] = [current, arr[j]];
        }
    }
    return arr;
}
let arr = [2, 1, 9, 76, 4];
// console.log(arr);
// console.log(insertionSort(arr));
const bigRandArr = [];
for (let i = 0; i < 100000; i++) {
    let temp = Math.random();
    bigRandArr.push(temp);
}
console.log(bigRandArr);
console.log(insertionSort(bigRandArr));
