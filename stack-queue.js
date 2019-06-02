///////Data Structure Definition
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5

var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2


///////Insert
stack.push(data);
queue.push(data);//push adds data to the end 

///////Delete 
stack.pop();

///////Lookup

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);


///////Pros and Cons///////
// Stack - 
// Pros:
// 1. Helps manage the data in particular way (LIFO) which is not possible with Linked list and array.
// 2. When function is called the local varriables are stored in stack and destroyed once returned. Stack is used when varriable is not used outside the function.
// So, it gives control over how memory is allocated and deallocated
// 3. Stack frees you from the burden of remembering to cleanup(read delete) the object
// 4. Not easily corrupted (No one can easily inset data in middle)

// Cons:
// 1. Stack memory is limited.
// 2. Creating too many objects on the stack will increase the chances of stack overflow
// 3. Random access not possible


// Queue - 
// Pros:
// 1. Helps manage the data in particular way (FIFO). which is not possible with Linked list and array.
// 2. Not easily corrupted (No one can easily inset data in middle)

// Cons:
// 1. Random access not possible