"use strict";
function naiveSearch(long, short) {
    let index = -1;
    for (let i = 0; i < long.length - short.length; i++) {
        let count = 0;
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                count = 0;
                break;
            }
            count++;
        }
        if (count === short.length) {
            index = i;
            break;
        }
    }
    return index;
}
console.log(naiveSearch("lorie loled", "ole"));
