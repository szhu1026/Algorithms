//implement algorithm to find kth to last element of a singly linked list
//O(n) time and O(1) space;

LinkedList.prototype.findkth = function(k){
  if (k < 1) {
    throw new Error("can't find less than 1st node");
  }

  let leftnode = this.head;
  let rightnode = this.head;

  for (let i = 0; i < k; i++){
    if (!rightnode.next){
      throw new Error("k is larger than link list");
    }
    rightnode = rightnode.next;
  }

  while (rightnode.next){
    leftnode = leftnode.next;
    rightnode = rightnode.next;
  }
  return leftnode;
}
