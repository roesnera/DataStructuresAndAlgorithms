"use strict";
function selectionSort(arr, compare, swap) {
    for (let i = 0; i < arr.length; i++) {
        let min = [arr[i], i];
        for (let j = 0 + i; j < arr.length; j++) {
            const comparison = compare(arr[j], min[0]);
            if (comparison < 0) {
                min = [arr[j], j];
            }
        }
        swap(arr, i, min[1]);
    }
    return arr;
}
function compareNums(a, b) {
    return a - b;
}
const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
};
let arr = [1, 2, 0, 9, 7, 5, 6];
console.log(arr);
console.log(selectionSort(arr, compareNums, swap));
