function MinStack(){
  this.values = [];
}

MinStack.prototype.push = function(val){
  if (this.values.length === 0){
    this.values.push([val, val]);
  }
  else {
    new_min = Math.min(...[this.min(), value]);
    this.values.push([val, new_min]);
  }
}

MinStack.prototype.pop = function(){
  let val, max = this.values.pop();
  return val;
}

MinStack.prototype.min = function(){
  this.values.last[1];
}
