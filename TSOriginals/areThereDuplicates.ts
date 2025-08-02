// type frequencyObj = {
//     [key: string]: number;
// }

// returns true if there are duplicates in the argument list
// example of frequency counter appraoch
// function areThereDuplicates(...args: any[]): boolean {
//     if(args.length===0||args.length===1) return false;
//     const freq: frequencyObj = {};
//     for(const element of args) {
//         if(freq[element]>0) return true;
//         freq[element] = 1;
//         console.log(freq);
//     }
//     return false;
// }


// example below usees multiple pointers appraoch
// time complexity O(n log n), space complexity O(1)
// function areThereDuplicates(...args: any[]): boolean {
//     args.sort();
//     let start: number = 0;
//     let next: number = 1;
//     while(next<args.length){
//         if(args[start]===args[next]) return true;
//         start++;
//         next++;
//     }
//     return false;
// }

// I assume time complexity is O(n log n) and space is O(1)
function areThereDuplicates(...args: any[]): boolean {
    return new Set(args).size !== args.length;
}

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates("a", "b", "c", "a"));