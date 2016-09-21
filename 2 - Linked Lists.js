'use strict';

function LinkedList () {
    this.head = null;
}

LinkedList.prototype.insertNodeAtTail = function (val) {
    var node = {
        data: val,
        next:null
    };

    //if head doesn't exist yet
    if (!this.head) {
        this.head = node;
    //capture head.  while head has next value, capute node without next value.  get last node, set node to last value.
    } else {
        var p1 = this.head;
        while (p1.next) {
            p1 = p1.next;
        }
        p1.next = node;
        //set last node to newly created note
    }
};

LinkedList.prototype.deleteNode = function (val) {
    // If linked list is empty
    if (!this.head) {
      console.log('Linked list is empty.');
      return;
    }
    // if you have to delete the head, set new head to head.next
    if (this.head.data === val) {
        this.head = this.head.next;
    //youll have to 2 variables.  the head, and head.next.  if head.next value isn't the right value,
    //set head to the head.next.  at the end of the loop, reset head.next.  if head.next value is the
    //right value, set head.next to head.next.next, and break out of the loop.
    } else {
      var p1 = this.head;
      var p2 = p1.next;
      while (p2) {
        if (p2.data === val) {
            p1.next = p2.next;
            break;
        } else {
            p1 = p2;
        }
        p2 = p2.next;
      }
    }
};

// Create an instance of a LinkedList class
var L1 = new LinkedList();

// Create a linked list with six elements
L1.insertNodeAtTail(5);
L1.insertNodeAtTail(6);
L1.insertNodeAtTail(7);
L1.insertNodeAtTail(8);
L1.insertNodeAtTail(9);
L1.insertNodeAtTail(10);
console.log(L1);

// Delete a head and a tail node
L1.deleteNode(5);
L1.deleteNode(10);
console.log(L1);

// Delete  an intermediate node
L1.deleteNode(7);
console.log(L1);

module.exports = LinkedList;
