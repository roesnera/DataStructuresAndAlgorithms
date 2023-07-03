


function insertionSort<T>(arr: T[]): T[] {
    for( let i = 1; i < arr.length; i++){
        let current = arr[i];
        for( let j = i - 1; j >= 0 && arr[j] > current; j--){
            [arr[j], arr[j+1]] = [current, arr[j]];
        }
    }
    return arr;
}

let arr = [2, 1, 9, 76, 4];

console.log(arr);
console.log(insertionSort(arr));

