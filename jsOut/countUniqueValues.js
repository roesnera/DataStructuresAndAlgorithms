"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countUniqueValues(arr) {
    let pointer1 = 0, pointer2 = 1;
    if (arr.length === 0)
        return 0;
    while (pointer2 < arr.length) {
        // console.log(arr[pointer1],arr[pointer2])
        if (arr[pointer1] !== arr[pointer2]) {
            // move pointer 1 forwards, change element at arr[pointer1] to arr[pointer2]
            arr[++pointer1] = arr[pointer2];
        }
        // move pointer2 forwards
        pointer2++;
    }
    return pointer1 + 1;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
exports.default = countUniqueValues;
