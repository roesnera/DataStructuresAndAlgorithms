

function binarySearch<T>(arr: T[], item: T): number {
    let index: number = -1;
    let leftPointer: number = 0;
    let rightPointer: number = arr.length -1;
    let currentIndex: number = Math.floor((leftPointer + rightPointer)/2);
    while (arr[currentIndex]!==item && leftPointer < rightPointer){
        if(arr[currentIndex]>item){
            rightPointer = currentIndex-1;
        }
        else {
            leftPointer = currentIndex+1;
        }
        currentIndex = Math.floor((leftPointer + rightPointer)/2);
    }
    if (arr[currentIndex] === item) {
        index = currentIndex;
    }
    return index;
}

const myArr2 = [0,1,2,3,4,5,6,7,8,9];
console.log(binarySearch(myArr2, 8));
// console.log("expecting the above to be: 5");