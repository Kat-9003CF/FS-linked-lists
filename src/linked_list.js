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
    while (node) {
      if (node !== index) {
        node = node.next;
      }
      if (node.value !== 0) {
        return node.value;
      } else {
        return null;
      }
    }
  }

  // removes the node assigned to the tail
  removeFromTail() {
    let node = this.head;
    while (node) {
      if (node.next !== this.tail) {
        //do nothing
        let previous = node;
        node = node.next;
      } else {
        previous.next = null;
      }
    }
  }

  // adds a node to the head of the list
  addToHead(val) {}

  // removes the node assigned to the head
  removeFromHead() {}

  // returns the node that contains the value
  findNode(refNodeValue) {}

  // applies a callback to every node in the list
  forEach(fn) {}

  // inserts a new node after the reference node
  insertAfter(refNodeValue, val) {}

  // remove the node after the reference node
  removeAfter(refNodeValue) {}

  // OPTIONAL

  //merges the current list with a new list, appending the new list after the tail of the current list
  mergeAppend(newList) {}

  //merges the current list with a new list, by inserting the new list after the node in the index position.
  mergeAfterIndex(newList, index) {}
}

module.exports = LinkedList;
