"use strict";
class LLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const nodeToAdd = new LLNode(val);
        if (this.length === 0 || !!!this.head || !!!this.tail) {
            this.head = nodeToAdd;
            this.tail = this.head;
        }
        else {
            this.tail.next = nodeToAdd;
            this.tail = nodeToAdd;
        }
        this.length++;
    }
    pop() {
        if (this.length === 0 || !!!this.head)
            return null;
        let current = this.head;
        if ((current === null || current === void 0 ? void 0 : current.next) !== null) {
            while ((current === null || current === void 0 ? void 0 : current.next) !== null && (current === null || current === void 0 ? void 0 : current.next) !== undefined && (current === null || current === void 0 ? void 0 : current.next.next) !== null) {
                current = current === null || current === void 0 ? void 0 : current.next;
            }
        }
        const toReturn = current === null || current === void 0 ? void 0 : current.next;
        current ? current.next = null : null;
        this.tail = current;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return toReturn;
    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    shift() {
        if (this.length === 0 || !!!this.head)
            return null;
        const toReturn = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return toReturn;
    }
    unshift(val) {
        const newNode = new LLNode(val);
        if (!!!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    get(ind) {
        if (ind < 0)
            return null;
        let current = this.head;
        for (let i = 0; i < ind; i++) {
            current = current.next;
        }
        return current;
    }
}
const first = new LLNode("Hi");
first.next = new LLNode("there");
first.next.next = new LLNode("how");
first.next.next.next = new LLNode("are");
first.next.next.next.next = new LLNode("you");
const myList = new SinglyLinkedList();
myList.push("first val");
myList.push("second val");
myList.push("third val");
myList.push("last val");
console.log(myList.head, myList.tail, myList.length);
myList.traverse();
const poppedNode = myList.pop();
console.log(`Popped: ${poppedNode === null || poppedNode === void 0 ? void 0 : poppedNode.val}, next is ${poppedNode === null || poppedNode === void 0 ? void 0 : poppedNode.next}`);
console.log(myList.head, myList.tail, myList.length);
myList.traverse();
const shiftedNode = myList.shift();
console.log(`Shifted head: ${shiftedNode === null || shiftedNode === void 0 ? void 0 : shiftedNode.val}`);
myList.traverse();
console.log(myList.length);
myList.unshift(shiftedNode === null || shiftedNode === void 0 ? void 0 : shiftedNode.val);
console.log(`Unshifted`);
myList.traverse();
console.log(myList.length);
const gottenNode = myList.get(1);
console.log(`Got a node at index 1: val: ${gottenNode === null || gottenNode === void 0 ? void 0 : gottenNode.val}, next: ${gottenNode === null || gottenNode === void 0 ? void 0 : gottenNode.next}`);
