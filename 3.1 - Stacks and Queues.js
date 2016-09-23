function Stack(){
  this.top = undefined;
  this.size = 0;
}

function Node(){
  this.data = data;
  this.previous = undefined;
}

Stack.prototype.push = function(data){
  let node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
}

Stack.prototype.pop = function(){
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
}

function Queue(){
  this.first = undefined;
  this.size = 0;
}

Queue.prototype.enqueue = function(data){
  let node = new Node(data);

  if (!this.first){
    this.first = node;
  }
  else {
    n = this.first;
    while (n.next){
      n = next;
    }
    n.next = node;
  }

  this.size += 1;
  return node;
}

Queue.prototype.dequeue = function(){
  temp = this.first;
  this.first = this.first.next;
  this.size -= 1;
  return temp;
}
