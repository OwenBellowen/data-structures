const { BinarySearchTree, Graph, HashMap, Queue, Stack } = require("./dist");

// Test BinarySearchTree
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
console.log(bst.search(3)); // Output: true
console.log(bst.search(10)); // Output: false

// Test Graph
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
console.log(graph.hasEdge("A", "B")); // Output: true
console.log(graph.hasEdge("B", "D")); // Output: false

// Test HashMap
const hashMap = new HashMap();
hashMap.set("key1", "value1");
hashMap.set("key2", "value2");
console.log(hashMap.get("key1")); // Output: value1
console.log(hashMap.get("key3")); // Output: undefined

// Test Queue
const queue = new Queue();
queue.enqueue("item1");
queue.enqueue("item2");
console.log(queue.dequeue()); // Output: item1
console.log(queue.isEmpty()); // Output: false

// Test Stack
const stack = new Stack();
stack.push("item1");
stack.push("item2");
console.log(stack.pop()); // Output: item2
console.log(stack.isEmpty()); // Output: false