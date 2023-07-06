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
    head: LLNode<T> | null;
    tail: LLNode<T> | null;
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
    pop(){
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
const poppedNode: LLNode<any>|null|undefined = myList.pop();
console.log(`Popped: ${poppedNode?.val}, next is ${poppedNode?.next}`);
console.log(myList.head, myList.tail, myList.length);
myList.traverse();