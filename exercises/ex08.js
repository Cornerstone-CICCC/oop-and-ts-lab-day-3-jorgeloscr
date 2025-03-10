// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  // your code here
  let current = list.getHead();

  while (current) {
    if (current.data === value) {
    
      if (current.prev) {
        current.prev.next = current.next;
      } else {
        list.setHead(current.next); 
      }
      
      if (current.next) {
        current.next.prev = current.prev;
      } else {
        list.setTail(current.prev);
      }

      list.setSize(list.length() - 1);

    }

    current = current.next;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5