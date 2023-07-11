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
    push(val: T): void{
        const nodeToAdd = new LLNode(val);
        if(this.length === 0 || !!!this.head || !!!this.tail){
            this.head = nodeToAdd;
            this.tail = this.head;
        } else {
            this.tail.next = nodeToAdd;
            this.tail = nodeToAdd;
        }
        this.setLength();
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
        this.setLength();
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return toReturn;
    }
    traverse(): void{
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
        this.setLength();
        return toReturn;
    }
    unshift(val: T): void{
        const newNode = new LLNode(val);
        if(!!!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.setLength();
    }
    get(ind: number): LinkedListNode<T>|null{
        if(ind < 0) return null;
        let current: LLNode<T>|null = this.head;
        for(let i = 0; i<ind; i++){
            if(current){
                current = current.next;
            }
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
        this.setLength();
    }
    insert(ind: number, val: T): void {
        if(!(ind < 0 && ind >=this.length)){
            let current = this.head;
            for(let i = 1; i<ind; i++) {
                if(current && !!current.next){
                    current = current.next;
                    }
                }
            if(!!!current) return;
            const next = current.next;
            const node: LinkedListNode<T> = new LLNode(val);
            current.next = node;
            node.next = next;
         }
        this.setLength();
    } 
    remove(ind: number): void {
        if(!(ind < 0 && ind >=this.length)){
            let current = this.head;
            for(let i = 1; i<ind; i++) {
                if(current && !!current.next){
                    current = current.next;
                    }
                }
            if(!!!current) return;
            if(current.next&&!!current.next.next){
                const next = current.next.next;
                current.next = next;
            } else {
                current.next = null;
            }
         }
        this.setLength();
    }
    setLength(): void {
        let count = 0;
        let current = this.head;
        while(current) {
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
const first: string = "first val";
myList.push(first);
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

myList.set(3, "final val");
myList.traverse();
myList.insert(2, "one before last");
myList.traverse();
console.log(myList.head, myList.tail, myList.length);
