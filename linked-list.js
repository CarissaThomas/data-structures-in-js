//Data Structure Definition

function LinkedList() {
    this.head = null;//These need to be created by another function;
    this.tail = null;
  }
  function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  LinkedList.prototype.addToHead = function(value) {
    const newNode = new Node(value, this.head, null)
    if (this.head) {//if there is already a head
        this.head.prev = newNode;//set our newNode to the new head
    } else {
        this.tail = newNode;//set the tail to head because nothing exists yet
    } 
    this.head = newNode;//the head is now the node we created
  };

  LinkedList.prototype.addToTail = function(value) {
    const newNode = new Node(value, null, this.tail);
    
    if (this.tail) {//if there is a tail set the new one
        this.tail.next = newNode;
    } else {
        this.head = newNode;
        this.tail = newNode;
    } 
  }

//Insert
LinkedList.prototype.Insert = function(item) {
    // create a new node
    const newNode = new LinkedListNode(item);
                
    //special case: no items in the list yet
    if (this.head === null) {

        // just set the head to the new node
        this.head = newNode;
    } else {

        // start out by looking at the first node
        let current = this.head;

        // follow `next` links until you reach the end
        while (current.next !== null) {
            current = current.next;
        }
       
        // assign the node into the `next` pointer
        current.next = newNode; 
}

//Delete 
LinkedList.prototype.delete = function(val) {
    if (this.head.data === val) {//Reassign the existing head if the data is identical
        this.head = this.head.next;
    } else {
        var previousNode = this.head;
        var currentNode = previousNode.next;
        while (currentNode) {//While we havent reached the end of the link
            if (currentNode.data === val) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            } else {//Keep traversing down the link 
                previousNode = currentNode;//Assign previous to current
                currentNode = currentNode.next;//move down the link
            }
        }
    }
  }

//Lookup
LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head;//Start search at the head 
    
    while(currentNode) {

      if (currentNode.value === searchValue) {//values matches return it
        return currentNode;
      } 

      currentNode = currentNode.next;//Traverse down the link
    }
    return null;
  }


///////Pros and Cons///////

//Pros: Not restricted to declare the number of elements.  Easier deletes and inserts.
//Cons: Extra memory space for a link is required for each element of the list.