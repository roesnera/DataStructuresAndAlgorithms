interface DLLNode<T> {
    val: T,
    next: DLLNode|null,
    previous: DLLNode|null
}

class DoubleLinkedListNode<T> implements DLLNode {
    val: T,
    next: DoubleLinkedListNode<T>,
    previous: DoubleLinkedListNode<T>,
    constructor(val: T){
    this.val = val
    }
}
