function getDigit(num: number, place: number): number {
    const modulo: number = place * 10;
    let numInPlace: number;
    if(place > 1){
        const moduloMinusOne: number = (place-1)*10;
        numInPlace = (num % modulo) - (num % moduloMinusOne);
    } else {
        numInPlace = num % modulo;
    }
    return num % modulo;
}

console.log(getDigit(1032, 1));