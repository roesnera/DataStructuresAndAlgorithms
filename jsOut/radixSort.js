"use strict";
function getDigit(num, place) {
    const modulo = place * 10;
    let numInPlace;
    if (place > 1) {
        const moduloMinusOne = (place - 1) * 10;
        numInPlace = (num % modulo) - (num % moduloMinusOne);
    }
    else {
        numInPlace = num % modulo;
    }
    return num % modulo;
}
console.log(getDigit(1032, 1));
