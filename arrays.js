///////Data Structure Definition
var arrayDefinition = ["item3", "item4"];

///////Insert///////
arrayDefinition.splice(index, howmany, "exampleDataToInsert")

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');// inserts at index 1, deletes nothing

console.log(months);// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

///////Delete////////
arrayDefinition.pop();//remove last item in the array
arrayDefinition.shift();//remove first item in the array
arrayDefinition.splice(2,2);//Remove 2 items starting at the 2nd index

///////Lookup////////
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12


///////Pros and Cons///////
// Pros:
// 1. Access to an array element is fast since we can compute its location quickly.

// Cons:
// 1. If we want to insert or delete an element, we have to shift subsequent elements which slows our computation down.
// 2. We need a large enough block of memory to hold our array.
// 3. Easily corrupted (One can easily inset data in middle)



//////Types of problems//////
