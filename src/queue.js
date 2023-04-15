const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.st = null;
  }

  getUnderlyingList() {
    return this.st;
  }

  enqueue(value) {
    if (this.st === null) {
      this.st = new ListNode(value);
    } else {
      let currN = this.st;
      while (currN.next !== null) {
        currN = currN.next;
      }
      currN.next = new ListNode(value);
    }
  }

  dequeue() {
    let r = this.st.value;
    this.st = this.st.next;
    return r;
  }
}

module.exports = {
  Queue
};
