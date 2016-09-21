let LinkedList = require('./2 - Linked Lists.js');

//write code to remove dups from an unsorted linked list

//approach 1: use hash list

LinkedList.prototype.removeDuplicates = function(){
  //no nodes

  if (!this.head || !this.head.next){
    return;
  }

  let p1 = this.head;
  let p2 = this.head.next;
  let nodes = {};
  nodes[p1.data] = true;

  while (p2){
    let data = p2.data;

    if (nodes[data]){
      p1.next = p2.next;
    }
    else {
      nodes[data] = true;
      p1 = p2;
    }
    p2 = p1.next;
  }
}

//approach 2: two pointers, current, runner

LinkedList.prototype.removeDuplicates2 = function() {
  // Empty or a single element Linked List
  if (!this.head || !this.head.next) {
    return;
  }

  var p1;
  var p2;
  var p3;
  var val;
  p2 = this.head;

  while (p2) {
    val = p2.data;
    p1 = p2;
    p3 = p1.next;

    while (p3) {
      if (p3.data === val) {
          p1.next = p3.next;
      } else {
        p1 = p3;
      }
      p3 = p3.next;
    }

    p2 = p2.next;
  }
};

// Base case : No duplicates
var L1 = new LinkedList();
L1.insertNodeAtTail(5);

L1.removeDuplicates();
console.log(L1);

// Two nodes with duplicates
var L2 = new LinkedList();
L2.insertNodeAtTail(5);
L2.insertNodeAtTail(5);

L2.removeDuplicates();
console.log(L2);

// Two nodes without duplicates
var L3 = new LinkedList();
L3.insertNodeAtTail(5);
L3.insertNodeAtTail(6);

L3.removeDuplicates();
console.log(L3);

// Remove duplicates at the end
var L4 = new LinkedList();
L4.insertNodeAtTail(5);
L4.insertNodeAtTail(6);
L4.insertNodeAtTail(7);
L4.insertNodeAtTail(8);
L4.insertNodeAtTail(5);

L4.removeDuplicates();
console.log(L4);

// Remove multiple duplicates from middle
var L5 = new LinkedList();
L5.insertNodeAtTail(5);
L5.insertNodeAtTail(6);
L5.insertNodeAtTail(7);
L5.insertNodeAtTail(5);
L5.insertNodeAtTail(5);
L5.insertNodeAtTail(8);

L5.removeDuplicates();
console.log(L5);
