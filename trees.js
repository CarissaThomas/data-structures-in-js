///////Data Structure Definition
function Node(data) {
    this.data = data;//stores data of tree node
    this.parent = null;//no parent initial
    this.children = [];//the children of the tree node
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

///////Insert
Tree.prototype.add = function(value){
    let newNode = { value, left: null, right: null};
    
    // set the root if we don't have one
    if(this.root == null){
      this.root = newNode;
      return;
    }
    
    let current = this.root;
    
    while(true){
      // check for right
      if(value > current.value){//our value is bigger than the root
        // add right
        
        if (!current.right) { //if there is no right value
            current.right = newNode; break;//set the right value to our new node
        }
        
        current = current.right;
        
      // check for left 
      } else if(value < current.value){//if the value is smaller then the current
        // add left
        if (!current.left) { //if there is no left our newNode = left
            current.left = newNode; break; 
        }
        current = current.left;
      } else {
        // if it's the same ignore
        break;
      }
    }
  }


///////Delete 
Tree.prototype.delete = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
};

///////Lookup
Tree.prototype.contains = function(value) {
    let current = this._root;

    while(current){
      if(current.value == value){
        return true;
      } else if (current.value > value){//recurse down the tree depending on value
        current = current.left;//current bigger than parameter value
      } else {
        current = current.right;//current smaller than parameter value
      }
    }

    return false;
  }

///////Pros and Cons///////
// Pros:
// 1. Searching is faster (with some ordering e.g., BST). we can search for a given key in moderate time (quicker than Linked List and slower than arrays).
// 2. Insert/delete keys in moderate time (quicker than Arrays and slower than Unordered Linked Lists).

// Cons:
// 1. High overhead
// 2. Large waste of unused links
// 3. Predetermined limit on number of a node’s children