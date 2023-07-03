function naiveSearch(long: string, short: string): number {
    let index: number = -1;

    for(let i = 0; i<long.length-short.length; i++){
        let count: number = 0;
        for(let j = 0; j<short.length; j++){
            if(short[j]!==long[i+j]){
                count=0;
                break;
            }
            count++;
        }
        if(count===short.length){
            index = i;
            break;
        }
    }

    return index;
}

console.log(naiveSearch("lorie loled", "ole"));