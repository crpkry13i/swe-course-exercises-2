/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at idx. */

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);

    // if list is empty
    if (this.head === null) {
      // set head and tail to new node
      this.head = node;
      this.tail = node;
    } else {
      // set new node's next to current tail
      this.tail.next = node;
      this.tail = node;
    }
    // increment length
    this.length++;
  }

  /** unshift(val): add new value to start of list. Returns undefined. */

  unshift(val) {
    let newNode = new Node(val);

    // if list is empty
    if (this.head === null) {
      // set head and tail to new node
      this.head = newNode;
    } else {
      // set new node's next to current head
      newNode.next = this.head;
      // set head to new node
      this.head = newNode;
    }
    // increment length
    if (this.length === 0) this.tail = this.head;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // if list is empty
    if (this.head === null) return undefined;

    // if idx is negative
    if (idx < 0) {
      // set idx to length + idx
      idx = this.length + idx;
    }

    // if idx is greater than length
    if (idx >= this.length) return undefined;

    // if idx is 0
    if (idx === 0) {
      this.head = new Node(val);
      this.head.next = this.head;
      this.length++;
      return this.head;
    }

    // if idx is length - 1
    if (idx === this.length - 1) {
      this.tail = new Node(val);
      this.tail.next = this.tail;
      this.length++;
      return this.tail;
    }

    // if idx is in between
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.next = new Node(val);
    current.next.next = current.next;
    this.length++;
    return current.next;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    // get the one before it
    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // special case: remove first item

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    // special case: remove tail

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    // normal case: remove in middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    // if list is empty
    if (this.head === null) return 0;

    // if list has only one node
    if (this.head === this.tail) {
      // return head's val
      return this.head.val;
    }

    // if list has more than one node
    let sum = 0;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

let avgLst = new LinkedList([2, 3, 1, 1, 7, 6, 9]).average();

module.exports = LinkedList;
