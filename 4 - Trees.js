function pre_order(root, nodes){
  nodes.push(root.value);

  if (root && root.left) {
    pre_order(root.left, nodes);
  }

  if (root && root.right){
    pre_order(root.right, nodes);
  }

  return nodes;
}

function in_order(root, nodes){
  if (root && root.left){
    pre_order(root.left, nodes);
  }

  nodes.push(root.value);

  if (root && root.right){
    pre_order(root.right, nodes);
  }

  return nodes;
}

function post_order(root, nodes){

  if (root && root.left){
    pre_order(root.left, nodes);
  }

  if (root && root.right){
    pre_order(root.right, nodes)
  }

  nodes.push(root.data);

  return nodes;
}

function level_order(root, nodes){
  let queue = [root];

  while (queue.length > 0){
    let val = queue.shift();
    nodes.push(n.data);

    if (val.left !== null) {queue.push(val.left)}
    if (val.right !== null){queue.push(val.right)}
  }

  return nodes;
}
