
// returns true if there is an adjacent pair with the average specified by a
// I didn't realize that the ask was for any pair, which would require sorting to be efficient

function averagePair(array: number[], a: number): boolean {
    if(array.length<2) return false;
    let sumAve: number = (array[0]+array[1])/2;
    for(let i = 1; i < array.length-1; i++){
        console.log(sumAve);
        if(sumAve===a) return true;
        sumAve+=(array[i+1])/2;
        sumAve-=(array[i-1])/2;
    }
    return sumAve===a;
}

// console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
// console.log(averagePair([],4));