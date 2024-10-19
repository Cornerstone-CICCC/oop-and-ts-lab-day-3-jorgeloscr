// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners (one runner moves one node at a time, the other one moves two nodes at a time)

const SLL = require('../lib/SLL');

function findMiddle(list) {
  // your code here

  if (list.isEmpty()) {
    return null; 
  }

  let slowRunner = list.getHead();
  let fastRunner = list.getHead();

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;       
    fastRunner = fastRunner.next.next;   
  }
  return slowRunner.data;
}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

console.log(findMiddle(list)); // Output: 3