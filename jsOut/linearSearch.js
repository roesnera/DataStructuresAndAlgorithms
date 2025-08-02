"use strict";
function linearSearch(item, collection) {
    let index = -1;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === item) {
            index = i;
        }
    }
    return index;
}
const myArr = [1, 2, 420, 666];
console.log("expecting the following to be 2");
console.log(linearSearch(420, myArr));
