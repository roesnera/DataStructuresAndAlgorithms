//bubble sort
// requires a nested loop
// the outer loop will iterate once for each element in the array
// the inner loop will iterate once for each element in the array minus the number of completed outer loop iterations
// inside the inner loop, if the early element is larger than the later element, swap the two

/* 
    function bubbleSort(array, comparisonFunction, swapFunction)
    array: array to be sorted
    comparisonFunction: function that will be used to make the comparison
    swapFunction: function that will be used to swap two elements in an array at the given indexes
*/
function bubbleSort<T>(
  arr: T[],
  compare: (a: T, b: T) => number,
  swap: (arr: T[], ind1: number, ind2: number) => void
): T[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let noSwaps: boolean = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const comparison = compare(arr[j], arr[j + 1]);
      if (comparison > 0) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
      if(noSwaps) break;
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

console.log(bubbleSort(arr, compareNums, swap));
