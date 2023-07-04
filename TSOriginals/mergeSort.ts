
function mergeSort(arr: number[]): number[]{
    if(arr.length <=1){
        return arr;
    }
    const half = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half, arr.length));
    return merge(left, right);
}

function merge(arr1: number[], arr2:number[]): number[] {
    const finalArr: number[] = [];
    let pointer1: number = 0;
    let pointer2: number = 0;
    while(pointer1<arr1.length&&pointer2<arr2.length){
        if(arr1[pointer1]<arr2[pointer2]){
            finalArr.push(arr1[pointer1]);
            pointer1++;
        } else {
            finalArr.push(arr2[pointer2]);
            pointer2++;
        }
    }

    if(pointer1<arr1.length){
        let tempArr = arr1.slice(pointer1, arr1.length);
        finalArr.push(...tempArr);
    }
    if(pointer2<arr1.length){
        let tempArr = arr2.slice(pointer2, arr2.length);
        finalArr.push(...tempArr);
    }
    return finalArr;
}

const arr1: number[] = [0, 2, 3, 4];
const arr2: number[] = [1, 5, 6];
const fullArr: number[] = [...arr1, ...arr2];
// console.log(merge(arr2,arr1));
const bigRandArr: number[] = [];
for(let i = 0; i<100000; i++){
    let temp = Math.random();
    bigRandArr.push(temp);
}
console.log(bigRandArr);
console.log(mergeSort(bigRandArr));