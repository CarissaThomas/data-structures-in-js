// Arrays - 
// Pros:
// 1. Access to an array element is fast since we can compute its location quickly.

// Cons:
// 1. If we want to insert or delete an element, we have to shift subsequent elements which slows our computation down.
// 2. We need a large enough block of memory to hold our array.
// 3. Easily corrupted (One can easily inset data in middle)


// Linked Lists - 
// Pros:
// 1. Inserting and deleting data does not require us to move/shift subsequent data elements.

// Cons:
// 1. If we want to access a specific element, we need to traverse the list from the head of the list to find it which can take longer than an array access.
// 2. Linked lists require more memory.
// 3. Easily corrupted (One can easily inset data in middle)


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


// Tree - 
// Pros:
// 1. Searching is faster (with some ordering e.g., BST). we can search for a given key in moderate time (quicker than Linked List and slower than arrays).
// 2. Insert/delete keys in moderate time (quicker than Arrays and slower than Unordered Linked Lists).

// Cons:
// 1. High overhead
// 2. Large waste of unused links
// 3. Predetermined limit on number of a node’s children

// Heap - 
// Pros:
// 1. When the data in the variable is needed beyond the lifetime of the current function.
// 2. It can offer the maximum memory an OS can provide

// Cons:
// 1. You must make sure to free the memory when you are done

// Graph - 
// Pros:
// 1. Finding the path in efficient way

// Cons:
// 1. High overhead
// 2. Large waste of unused links