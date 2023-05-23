"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function anagrams(string1, string2) {
    if (typeof string1 !== typeof string2 || typeof string1 !== "string")
        return false;
    let freq1 = {};
    let freq2 = {};
    for (const char of string1) {
        if (isAlphabetical(char)) {
            freq1[char] = (freq1[char] || 0) + 1;
        }
    }
    console.log(freq1);
    for (const char of string2) {
        if (isAlphabetical(char)) {
            freq2[char] = (freq2[char] || 0) + 1;
        }
    }
    console.log(freq2);
    for (const key in freq1) {
        if (!(key in freq2))
            return false;
        if (freq1[key] !== freq2[key])
            return false;
    }
    return true;
}
function isAlphabetical(char) {
    // console.log(/[a-zA-Z]/.test(char));
    if (/[a-zA-Z]/.test(char))
        return true;
    return false;
}
exports.default = anagrams;
