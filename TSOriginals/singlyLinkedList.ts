interface LinkedListNode<T> {
    val: T,
    next: LinkedListNode<T> | null
}

class LLNode<T> implements LinkedListNode<T> {
    val: T;
    next: LLNode<T> | null;

    constructor(val: T){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList<T> {
    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;
    length: number;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val: T){
        const nodeToAdd = new LLNode(val);
        if(this.length === 0 || !!!this.head || !!!this.tail){
            this.head = nodeToAdd;
            this.tail = this.head;
        } else {
            this.tail.next = nodeToAdd;
            this.tail = nodeToAdd;
        }
        this.length++;
    }
    pop(): LinkedListNode<T> | null{
        if(this.length === 0 || !!!this.head) return null;
        let current = this.head;
        if(current?.next!==null){
            while (current?.next!==null&&current?.next!==undefined&&current?.next.next!==null){
                current=current?.next;
            }
        }
        const toReturn = current?.next;
        current ? current.next=null:null;
        this.tail = current;
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return toReturn;
    }
    traverse(){
        let current: LLNode<T>|null = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    shift(): LinkedListNode<T>|null{
        if(this.length===0||!!!this.head) return null;
        const toReturn = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return toReturn;
    }
    unshift(val: T){
        const newNode = new LLNode(val);
        if(!!!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    get(ind: number): LinkedListNode<T>|null{
        if(ind < 0) return null;
        let current: LLNode<T>|null = this.head;
        for(let i = 0; i<ind; i++){
            current = current?.next;
        }
        return current;
    }
    set(ind: number, val: T): void {
        if(!(ind < 0 && ind >=this.length)){
            let current = this.head;
            for(let i = 0; i<ind; i++) {
                if(current && !!current.next){
                    current = current.next;
                    }
                }
            if(current) current.val = val;
        }
}

const first: LLNode<String> = new LLNode("Hi");
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
const poppedNode: LinkedListNode<any>|null = myList.pop();
console.log(`Popped: ${poppedNode?.val}, next is ${poppedNode?.next}`);
console.log(myList.head, myList.tail, myList.length);
myList.traverse();
const shiftedNode = myList.shift();
console.log(`Shifted head: ${shiftedNode?.val}`);
myList.traverse();
console.log(myList.length);
myList.unshift(shiftedNode?.val);
console.log(`Unshifted`);
myList.traverse();
console.log(myList.length);

const gottenNode: LinkedListNode<any>|null = myList.get(1);
console.log(`Got a node at index 1: val: ${gottenNode?.val}, next: ${gottenNode?.next}`);
