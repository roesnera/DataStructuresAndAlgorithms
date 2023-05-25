type frequencyObj = {
    [key: string]: number;
}

// returns true if the digits in each number appear with the same frequency, otherwise false
// example of the frequency counter approach

function sameFrequency(a: number, b: number): boolean {
    let astring: any = "" + a;
    let bstring: any = "" + b;
    const aFreq: frequencyObj = {};
    const bFreq: frequencyObj = {};
    for(const num of astring){
        aFreq[num] = aFreq[num]+1|1;
    }
    console.log(aFreq);
    for(const num of bstring){
        bFreq[num] = bFreq[num]+1|1;
    }
    console.log(bFreq);
    for(const key in aFreq){
        if(aFreq[key]!=bFreq[key])return false;
    }
    if(Object.keys(aFreq).length!==Object.keys(bFreq).length) return false;
    return true;
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));