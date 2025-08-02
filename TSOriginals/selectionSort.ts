


function selectionSort<T>(arr: T[], compare: (a: T, b: T) => number, swap: (arr: T[], ind1: number, ind2: number)): T[] {
    for(let i = 0; i< arr.length; i++){
        let min: [T, number] = [arr[i], i];
        for(let j = 0+i; j<arr.length; j++){
            const comparison = compare( arr[j], min[0]);
            if(comparison < 0){
                min = [arr[j], j];
            }
        }
        swap(arr, i, min[1]);
    }

    return arr;
}

function compareNums(a: number, b: number): number {
  return a - b;
}

const swap = <T>(arr: T[], ind1: number, ind2: number) => {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
};

let arr = [1, 2, 0, 9, 7, 5, 6];

console.log(arr);
console.log(selectionSort(arr, compareNums, swap));

