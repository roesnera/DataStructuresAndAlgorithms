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
    head: LLNode<T>;
    tail: LLNode<T>;
    length: number;
    constructor(val: T){
        const node = new LLNode(val);
        this.head = node;
        this.tail = node;
        this.length = 1;
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
        let current: LLNode<T> = this.head;
        if(current.next!==null){
            while (current.next!==null&&current.next.next!==null){
                current=current.next;
            }
        }
        const toReturn = current.next;
        current.next=null;
        this.tail = current;
        this.length--;
        return toReturn;
    }
}

const first = new LLNode("Hi");
first.next = new LLNode("there");
first.next.next = new LLNode("how");
first.next.next.next = new LLNode("are");
first.next.next.next.next = new LLNode("you");

const myList = new SinglyLinkedList("first val");
myList.push("second val");
myList.push("third val");
myList.push("last val");
console.log(myList.head, myList.tail, myList.length);
myList.pop();
console.log(myList.head, myList.tail, myList.length);
