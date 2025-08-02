"use strict";
// import anagrams from "./anagrams";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(anagrams("hello", "lolex"));
// console.log(anagrams("hello", "elloh"));
// console.log(anagrams("cinema", "iceman"));
const countUniqueValues_1 = __importDefault(require("./countUniqueValues"));
console.log((0, countUniqueValues_1.default)([1, 1, 1, 1, 1, 2]));
console.log((0, countUniqueValues_1.default)([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log((0, countUniqueValues_1.default)([]));
console.log((0, countUniqueValues_1.default)([-2, -1, -1, 0, 1]));
