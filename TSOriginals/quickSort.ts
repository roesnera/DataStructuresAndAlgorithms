
function quickSort(arr: number[], left=0, right=arr.length-1): number[] {
    if(left<right){
        let pivotIndex = pivot(arr, left, right);
        console.log(arr);
        quickSort(arr, left, pivotIndex-1);
        // console.log("\n-------------------\nDone with left side!\n-------------------\n");
        quickSort(arr, pivotIndex+1,right);
    }
    return arr;
}

// in order to implement merge sort, 
// it's useful to first implemenet a function responsible arranging elements in an array on either side of a pivot
// given an array, this helper function should designate an element as the pivot
// it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, 
// and all values greater than the pivot are moved to the right of the pivot
// it returns the value that represents the index position of the pivot

function pivot(arr: number[], start=0, end=arr.length-1): number {
    const pivot: number = arr[start];
    let smallerCount: number = start;
    for(let i = start+1; i<=end; i++){
        if(arr[i]<pivot){
            smallerCount++;
            swap(arr, i, smallerCount);
        }
    }
    if(smallerCount!==start){
        swap(arr, smallerCount, start);
    }
    return smallerCount;
}

// const unpivArr = [10, 11, 3, 4, 2];
// console.log(pivot(unpivArr));

function swap(arr: number[], ind1: number, ind2: number) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}

const unsortedArr = [5, -1, 3, 66, 7, 8 , 210, 13, 666];
console.log(quickSort(unsortedArr));