/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // if (this.first === null) {
    //   throw new Error("Stack is empty");
    // }
    // const val = this.first.val;
    // this.first = this.first.next;
    // this.size--;
    // return val;
    if (!this.first) throw new Error("Can't pop from an empty stack.");

    let temp = this.first;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
