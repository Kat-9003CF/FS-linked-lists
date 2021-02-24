/* ----------------------
Note: BEFORE tackling the LinkedList class
below, read the tests in the test file.
---------------------- */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  // adds a node to the tail of the list
  addToTail(val) {
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
  }

  // returns the total number of nodes in the list
  getSize() {
    let currentNode = this.head;
    let size = 1;

    while (currentNode !== this.tail) {
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  // WARM UP

  // returns the value of the head of the linked list
  headValue() {
    let node = this.head;
    return node.value;
  }

  // returns the value of the tail of the linked list
  tailValue() {
    let node = this.tail;
    return node.value;
  }

  // returns the value of the node that comes after the head
  nextToHead() {
    let node = this.head;
    while (node.next) {
      node = node.next;
      return node.value;
    }
    return null;
  }

  // MAIN EXERCISES

  // returns the NODE stored at the Nth index position of the list
  getNthNode(index) {
    let node = this.head;
    let ix = index;
    let i = 0;
    while (node && i < ix) {
      node = node.next;
      i++;
    }
    if (i === ix && node) {
      return node;
    }
    return null;
  }

  // removes the node assigned to the tail
  removeFromTail() {
    let node = this.head;
    let prevNode;
    while (node && node !== this.tail) {
      //do nothing
      prevNode = node;
      node = node.next;
    }
    if (node === this.tail) {
      let value = node; //store node
      this.tail = prevNode;
      prevNode.next = null; //we were trying to update the node, not the previous node
      return value; //return it last
    }
  }

  // adds a node to the head of the list
  addToHead(val) {
    //create new node
    let newNode = new Node(val);
    //update node pointer
    newNode.next = this.head;
    //update head
    this.head = newNode;
  }

  // removes the node assigned to the head
  removeFromHead() {
    let node = this.head;
    if (node.next) {
      let removedNode = node;
      this.head = node.next;
      return removedNode;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  // returns the node that contains the value
  findNode(refNodeValue) {
    let node = this.head;
    let ix = 1;
    while (node && ix < refNodeValue) {
      node = node.next;
      ix++;
    }
    if (ix === refNodeValue) {
      return node;
    } else {
      return `No node found.`;
    }
  }

  // applies a callback to every node in the list
  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  // inserts a new node after the reference node
  insertAfter(refNodeValue, val) {
    let node = this.head;
    let newNode = new Node(val);
    let ix = 1;
    while (node && ix < refNodeValue) {
      node = node.next;
      ix++;
    }
    if (ix === refNodeValue) {
      let nextNode = node.next;
      node.next = newNode;
      newNode.next = nextNode;
      if (node === this.tail) {
        this.tail = newNode;
      }
    } else {
      return `No node found.`;
    }
  }

  // remove the node after the reference node
  removeAfter(refNodeValue) {
    let node = this.head;
    let ix = 1;
    while (node && ix < refNodeValue) {
      node = node.next;
      ix++;
    }
    if (ix === refNodeValue) {
      if (node.next === this.tail) {
        this.tail = node;
      }
      let value = node.next;
      node.next = node.next.next;
      return value;
    } else {
      return `No node found.`;
    }
  }

  // OPTIONAL

  //merges the current list with a new list, appending
  //the new list after the tail of the current list
  mergeAppend(newList) {
    let node = this.tail;
    node.next = newList.head;
    this.tail = newList.tail;
  }

  //merges the current list with a new list, by inserting the
  //new list after the node in the index position.
  mergeAfterIndex(newList, index) {
    let node = this.head;
    let ix = 0; //why is it zero?
    while (node && ix < index) {
      node = node.next;
      ix++;
    }
    if (ix === index) {
      if (node === this.tail) {
        node.next = newList.head;
        this.tail = newList.tail;
      }
      let nextNode = node.next;
      node.next = newList.head;
      newList.tail.next = nextNode;
    }
  }
}

module.exports = LinkedList;
