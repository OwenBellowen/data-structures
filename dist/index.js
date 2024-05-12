"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = exports.BinarySearchTree = exports.Queue = exports.Stack = exports.HashMap = void 0;
/**
 * Represents a hash map data structure.
 * @template K The type of the keys in the map.
 * @template V The type of the values in the map.
 */
class HashMap {
    map = {};
    /**
     * Adds a key-value pair to the hash map.
     * @param key The key of the pair.
     * @param value The value of the pair.
     */
    put(key, value) {
        this.map[JSON.stringify(key)] = value;
    }
    /**
     * Retrieves the value associated with the given key from the hash map.
     * @param key The key to search for.
     * @returns The value associated with the key, or undefined if the key is not found.
     */
    get(key) {
        return this.map[JSON.stringify(key)];
    }
    /**
     * Removes the key-value pair associated with the given key from the hash map.
     * @param key The key to remove.
     */
    remove(key) {
        delete this.map[JSON.stringify(key)];
    }
    /**
     * Checks if the hash map contains the given key.
     * @param key The key to search for.
     * @returns true if the key is found, false otherwise.
     */
    contains(key) {
        return JSON.stringify(key) in this.map;
    }
    /**
     * Returns the number of key-value pairs in the hash map.
     * @returns The number of key-value pairs in the hash map.
     */
    size() {
        return Object.keys(this.map).length;
    }
    /**
     * Returns an array of all keys in the hash map.
     * @returns An array of all keys in the hash map.
     */
    keys() {
        return Object.keys(this.map).map(key => JSON.parse(key));
    }
}
exports.HashMap = HashMap;
/**
 * Represents a stack data structure.
 * @template T The type of elements stored in the stack.
 */
class Stack {
    elements = [];
    /**
     * Adds an element to the top of the stack.
     * @param element The element to be added.
     */
    push(element) {
        this.elements.push(element);
    }
    /**
     * Removes and returns the element at the top of the stack.
     * @returns The element at the top of the stack, or undefined if the stack is empty.
     */
    pop() {
        return this.elements.pop();
    }
    /**
     * Returns the element at the top of the stack without removing it.
     * @returns The element at the top of the stack, or undefined if the stack is empty.
     */
    peek() {
        return this.elements[this.elements.length - 1];
    }
    /**
     * Checks if the stack is empty.
     * @returns true if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.elements.length === 0;
    }
    /**
     * Returns the number of elements in the stack.
     * @returns The number of elements in the stack.
     */
    size() {
        return this.elements.length;
    }
}
exports.Stack = Stack;
/**
 * Represents a queue data structure.
 * @template T The type of elements stored in the queue.
 */
class Queue {
    elements = [];
    /**
     * Adds an element to the end of the queue.
     * @param element The element to be added.
     */
    enqueue(element) {
        this.elements.push(element);
    }
    /**
     * Removes and returns the element at the front of the queue.
     * @returns The element at the front of the queue, or undefined if the queue is empty.
     */
    dequeue() {
        return this.elements.shift();
    }
    /**
     * Returns the element at the front of the queue without removing it.
     * @returns The element at the front of the queue, or undefined if the queue is empty.
     */
    peek() {
        return this.elements[0];
    }
    /**
     * Checks if the queue is empty.
     * @returns true if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.elements.length === 0;
    }
    /**
     * Returns the number of elements in the queue.
     * @returns The number of elements in the queue.
     */
    size() {
        return this.elements.length;
    }
}
exports.Queue = Queue;
/**
 * Represents a binary search tree data structure.
 * @template T The type of elements stored in the tree.
 */
class TreeNode {
    value;
    left;
    right;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/**
 * Represents a binary search tree data structure.
 * @template T The type of elements stored in the tree.
 */
class BinarySearchTree {
    root = null;
    /**
     * Inserts a new value into the binary search tree.
     * @param value The value to be inserted.
     */
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    /**
     * Searches for a value in the binary search tree.
     * @param value The value to search for.
     * @returns true if the value is found, false otherwise.
     */
    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    }
    /**
     * Removes a value from the binary search tree.
     * @param value The value to be removed.
     */
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
    removeNode(node, value) {
        if (!node) {
            return null;
        }
        if (value === node.value) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            const temp = this.findMinNode(node.right);
            node.value = temp.value;
            node.right = this.removeNode(node.right, temp.value);
            return node;
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        }
        node.right = this.removeNode(node.right, value);
        return node;
    }
    findMinNode(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
}
exports.BinarySearchTree = BinarySearchTree;
/**
 * Represents a graph data structure.
 * @template T The type of elements stored in the graph.
 */
class Graph {
    vertices = new HashMap();
    /**
     * Adds a vertex to the graph.
     * @param vertex The vertex to be added.
     */
    addVertex(vertex) {
        this.vertices.put(vertex, []);
    }
    /**
     * Adds an edge between two vertices in the graph.
     * @param vertex1 The first vertex.
     * @param vertex2 The second vertex.
     */
    addEdge(vertex1, vertex2) {
        this.vertices.get(vertex1).push(vertex2);
        this.vertices.get(vertex2).push(vertex1);
    }
    /**
     * Removes a vertex from the graph.
     * @param vertex The vertex to be removed.
     */
    removeVertex(vertex) {
        const adjacentVertices = this.vertices.get(vertex);
        for (const adjacentVertex of adjacentVertices) {
            const adjacentAdjacentVertices = this.vertices.get(adjacentVertex);
            const index = adjacentAdjacentVertices.indexOf(vertex);
            if (index !== -1) {
                adjacentAdjacentVertices.splice(index, 1);
            }
        }
        this.vertices.remove(vertex);
    }
    /**
     * Removes an edge between two vertices in the graph.
     * @param vertex1 The first vertex.
     * @param vertex2 The second vertex.
     */
    removeEdge(vertex1, vertex2) {
        const adjacentVertices1 = this.vertices.get(vertex1);
        const index1 = adjacentVertices1.indexOf(vertex2);
        if (index1 !== -1) {
            adjacentVertices1.splice(index1, 1);
        }
        const adjacentVertices2 = this.vertices.get(vertex2);
        const index2 = adjacentVertices2.indexOf(vertex1);
        if (index2 !== -1) {
            adjacentVertices2.splice(index2, 1);
        }
    }
    /**
     * Checks if the graph contains a vertex.
     * @param vertex The vertex to search for.
     * @returns true if the vertex is found, false otherwise.
     */
    containsVertex(vertex) {
        return this.vertices.contains(vertex);
    }
    /**
     * Checks if the graph contains an edge between two vertices.
     * @param vertex1 The first vertex.
     * @param vertex2 The second vertex.
     * @returns true if the edge is found, false otherwise.
     */
    containsEdge(vertex1, vertex2) {
        return this.vertices.get(vertex1).includes(vertex2);
    }
    /**
     * Returns the number of vertices in the graph.
     * @returns The number of vertices in the graph.
     */
    size() {
        return this.vertices.size();
    }
    /**
     * Returns the number of edges in the graph.
     * @returns The number of edges in the graph.
     */
    numberOfEdges() {
        let count = 0;
        for (const vertex of this.vertices.keys()) {
            count += this.vertices.get(vertex).length;
        }
        return count / 2;
    }
    /**
     * Returns an array of all vertices in the graph.
     * @returns An array of all vertices in the graph.
     */
    getVertices() {
        return Object.keys(this.vertices);
    }
    /**
     * Returns an array of all adjacent vertices of a given vertex.
     * @param vertex The vertex to search for.
     * @returns An array of all adjacent vertices of the given vertex.
     */
    getAdjacentVertices(vertex) {
        return this.vertices.get(vertex);
    }
}
exports.Graph = Graph;
