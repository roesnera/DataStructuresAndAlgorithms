"use strict";
// define a base case for your function:
//  - what is the case that defines the end of the recursion of your function?
function countDown(number) {
    // craete base case listener first
    if (number <= 0) {
        console.log("all done!");
        return;
    }
    // then you are free to write the rest of your functionality including recursion
    console.log(number);
    countDown(number - 1);
}
// countDown(7);
// this function will add all numbers from 1 to number
function sumRange(number) {
    // craete base case listener first
    if (number === 1) {
        return number;
    }
    // then you are free to write the rest of your functionality including recursion
    return number + sumRange(number - 1);
}
// console.log(sumRange(10));
//factorial function
function factorial(number) {
    // base case
    if (number === 1 || number === 0) {
        return 1;
    }
    // rest of function
    return number * factorial(number - 1);
}
// console.log(factorial(5));
/* Problemos
    if you miss the base case
     - in factorial function, this would be negative numbers
    if you don't break on the base case
    stack overflow - usually forgetting to return
*/
// this is an example of recursion with helper function(s)
// this is useful when we need to cache a value between recursive calls
function collectOddValues(arr) {
    if (arr.length === 0) {
        return [];
    }
    const result = [];
    function helper(input) {
        if (input.length <= 0) {
            return;
        }
        if (input[input.length - 1] % 2 === 1) {
            result.push(input[input.length - 1]);
        }
        input.pop();
        helper(input);
    }
    helper(arr);
    return result.reverse();
}
// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))
// this function does the same as collectOddValues, but without using a closure
// this is called pure recursion
function collectOddValuesPure(arr) {
    let newArray = [];
    if (arr.length === 0) {
        return newArray;
    }
    if (arr[arr.length - 1] % 2 !== 0) {
        newArray.push(arr[arr.length - 1]);
    }
    arr.pop();
    newArray = newArray.concat(collectOddValuesPure(arr));
    return newArray.reverse();
}
// console.log(collectOddValuesPure([1,2,3,4,5,6,7,8,9]))
/* PRACTICE PROBLEMS */
function power(base, pow) {
    let result = base;
    if (pow <= 0) {
        return 1;
    }
    if (pow != 1) {
        return result * power(base, pow - 1);
    }
    return result;
}
// console.log(power(2,0));
function productOfArray(arr) {
    let result = arr[arr.length - 1];
    if (arr.length == 1) {
        return result;
    }
    arr.pop();
    return result * productOfArray(arr);
}
// console.log(productOfArray([1,2,3,4]));
function fib(num) {
    if (num === 1 || num === 2) {
        return 1;
    }
    return fib(num - 1) + fib(num - 2);
}
// console.log(fib(7));
function reverse(str) {
    let stringToReturn = str.substring(str.length - 1);
    if (str.length === 1) {
        return stringToReturn;
    }
    return stringToReturn.concat(reverse(str.slice(0, str.length - 1)));
}
// console.log(reverse("awesome"));
function isPalindrome(str) {
    if (str.length === 0) {
        return false;
    }
    else if (str.length === 1) {
        return true;
    }
    else if (str.length === 2) {
        return str.charAt(0) === str.charAt(1);
    }
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}
// console.log(isPalindrome('amanaplanacanalpandemonium'))
function someRecursive(arr, fn) {
    if (arr.length === 1) {
        return fn(arr[0]);
    }
    if (fn(arr[arr.length - 1])) {
        return true;
    }
    arr.pop();
    return someRecursive(arr, fn);
}
// console.log(someRecursive([4,6,8], function(val: number) {return val > 10}));
// FIXME: this doesn't quite work- it almost does but seems to be having trouble with weird arrangements.
function flatten(arr) {
    let arrToReturn = [];
    console.log(arr[0]);
    console.log(`arr[1]: ${arr[1]}`);
    if (arr.length === 1 && !Array.isArray(arr[0])) {
        console.log("arr has a length of 1 and arr[0] is not an array");
        arrToReturn.push(arr[0]);
        console.log("returning arrToReturn: " + arrToReturn);
        return arrToReturn;
    }
    if (Array.isArray(arr[0])) {
        console.log("arr[0] is an array but does exist");
        console.log("recursing");
        arrToReturn = [...arrToReturn, ...flatten(arr[0])];
    }
    if (!Array.isArray(arr[0])) {
        console.log("arr[0] is not an array but does exist");
        arrToReturn.push(arr[0]);
        arr.shift();
        console.log("appending the new entry to arrToReturn, recursing");
        arrToReturn = [...arrToReturn, ...flatten(arr)];
    }
    console.log("appending a recursive call to arrToReturn: " + arrToReturn);
    if (!!arr[1]) {
        return [...arrToReturn, ...flatten(arr[1])];
    }
    console.log("returning array: " + arrToReturn);
    return arrToReturn;
}
// console.log(flatten([1, [2, [3, 4], [[5]]]]));
function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    let arrToReturn = [];
    console.log("arr is: " + arr);
    if (arr.length === 1) {
        console.log("arr[0] is: " + arr[0].toUpperCase());
        return [arr[0].toUpperCase()];
    }
    arrToReturn.push(arr[0].toUpperCase());
    console.log("arrToReturn is: " + arrToReturn);
    arr.shift();
    return [...arrToReturn, ...capitalizeWords(arr)];
}
// console.log(capitalizeWords(["i","am","learning","recursion"]));
function stringifyNumbers(obj) {
    let objToReturn = {};
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            objToReturn[key] = obj[key] + "";
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            objToReturn[key] = stringifyNumbers(obj[key]);
        }
        else {
            objToReturn[key] = obj[key];
        }
    }
    return objToReturn;
}
// console.log(stringifyNumbers({
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }));
function collectStrings(obj) {
    let stringsArray = [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArray.push(obj[key]);
        }
        else if (typeof obj[key] === 'object') {
            stringsArray.push(...collectStrings(obj[key]));
        }
    }
    return stringsArray;
}
console.log(collectStrings({
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}));
