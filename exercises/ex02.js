// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  // your code here

  const tempStack = new Stack();
  let foundA = false;
  while (!fruits.isEmpty()) {
    const current = fruits.pop();

    if (current === b) {
      if (foundA) {
        tempStack.push(current);
      }
      break;
    }

    if (current === a) {
      foundA = true;
      tempStack.push(current);
    } else if (foundA) {
      continue;
    } else {
      tempStack.push(current);
    }
  }
  while (!tempStack.isEmpty()) {
    fruits.push(tempStack.pop());
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
