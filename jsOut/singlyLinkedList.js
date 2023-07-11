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
        this.setLength();
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
        this.setLength();
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
        this.setLength();
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
        this.setLength();
    }
    get(ind) {
        if (ind < 0)
            return null;
        let current = this.head;
        for (let i = 0; i < ind; i++) {
            if (current) {
                current = current.next;
            }
        }
        return current;
    }
    set(ind, val) {
        if (!(ind < 0 && ind >= this.length)) {
            let current = this.head;
            for (let i = 0; i < ind; i++) {
                if (current && !!current.next) {
                    current = current.next;
                }
            }
            if (current)
                current.val = val;
        }
        this.setLength();
    }
    insert(ind, val) {
        const node = new LLNode(val);
        if (ind === 0) {
            if (this.head) {
                node.next = this.head;
            }
            else {
                this.tail = node;
            }
            this.head = node;
        }
        else if (!(ind < 0 && ind >= this.length)) {
            let current = this.head;
            for (let i = 1; i < ind; i++) {
                if (current && !!current.next) {
                    current = current.next;
                }
            }
            if (!!!current)
                return;
            const next = current.next;
            current.next = node;
            node.next = next;
        }
        this.setLength();
    }
    remove(ind) {
        if (!(ind < 0 && ind >= this.length)) {
            let current = this.head;
            if (ind === 0 && current) {
                this.head = current === null || current === void 0 ? void 0 : current.next;
            }
            else {
                for (let i = 1; i < ind; i++) {
                    if (current && !!current.next) {
                        current = current.next;
                    }
                }
                if (!!!current)
                    return;
                if (current.next && !!current.next.next) {
                    const next = current.next.next;
                    current.next = next;
                }
                else {
                    current.next = null;
                    this.tail = current;
                }
            }
        }
        this.setLength();
    }
    reverse() {
        if (this.length > 0 && this.head) {
            const nodeArr = [];
            let current = this.head;
            nodeArr.push(current);
            while (current && current.next) {
                current = current.next;
                nodeArr.push(current);
            }
            console.log(nodeArr);
            this.head = nodeArr.pop();
            current = this.head;
            for (let i = nodeArr.length - 1; i >= 0; i--) {
                current.next = nodeArr.pop();
                current = current.next;
            }
            this.tail = current;
            this.tail.next = null;
        }
    }
    setLength() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        this.length = count;
    }
}
//const first: LLNode<String> = new LLNode("Hi");
//first.next = new LLNode("there");
//first.next.next = new LLNode("how");
//first.next.next.next = new LLNode("are");
//first.next.next.next.next = new LLNode("you");
const myList = new SinglyLinkedList();
const first = "first val";
myList.push(first);
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
myList.set(3, "final val");
myList.traverse();
myList.insert(2, "one before last");
myList.traverse();
console.log(myList.head, myList.tail, myList.length);
myList.reverse();
myList.traverse();
