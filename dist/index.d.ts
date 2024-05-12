/**
 * Represents a hash map data structure.
 * @template K The type of the keys in the map.
 * @template V The type of the values in the map.
 */
declare class HashMap<K, V> {
    private map;
    /**
     * Adds a key-value pair to the hash map.
     * @param key The key of the pair.
     * @param value The value of the pair.
     */
    put(key: K, value: V): void;
    /**
     * Retrieves the value associated with the given key from the hash map.
     * @param key The key to search for.
     * @returns The value associated with the key, or undefined if the key is not found.
     */
    get(key: K): V;
    /**
     * Removes the key-value pair associated with the given key from the hash map.
     * @param key The key to remove.
     */
    remove(key: K): void;
    /**
     * Checks if the hash map contains the given key.
     * @param key The key to search for.
     * @returns true if the key is found, false otherwise.
     */
    contains(key: K): boolean;
    /**
     * Returns the number of key-value pairs in the hash map.
     * @returns The number of key-value pairs in the hash map.
     */
    size(): number;
    /**
     * Returns an array of all keys in the hash map.
     * @returns An array of all keys in the hash map.
     */
    keys(): any[];
}
/**
 * Represents a stack data structure.
 * @template T The type of elements stored in the stack.
 */
declare class Stack<T> {
    private elements;
    /**
     * Adds an element to the top of the stack.
     * @param element The element to be added.
     */
    push(element: T): void;
    /**
     * Removes and returns the element at the top of the stack.
     * @returns The element at the top of the stack, or undefined if the stack is empty.
     */
    pop(): T | undefined;
    /**
     * Returns the element at the top of the stack without removing it.
     * @returns The element at the top of the stack, or undefined if the stack is empty.
     */
    peek(): T;
    /**
     * Checks if the stack is empty.
     * @returns true if the stack is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Returns the number of elements in the stack.
     * @returns The number of elements in the stack.
     */
    size(): number;
}
/**
 * Represents a queue data structure.
 * @template T The type of elements stored in the queue.
 */
declare class Queue<T> {
    private elements;
    /**
     * Adds an element to the end of the queue.
     * @param element The element to be added.
     */
    enqueue(element: T): void;
    /**
     * Removes and returns the element at the front of the queue.
     * @returns The element at the front of the queue, or undefined if the queue is empty.
     */
    dequeue(): T | undefined;
    /**
     * Returns the element at the front of the queue without removing it.
     * @returns The element at the front of the queue, or undefined if the queue is empty.
     */
    peek(): T;
    /**
     * Checks if the queue is empty.
     * @returns true if the queue is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Returns the number of elements in the queue.
     * @returns The number of elements in the queue.
     */
    size(): number;
}
/**
 * Represents a binary search tree data structure.
 * @template T The type of elements stored in the tree.
 */
declare class BinarySearchTree<T> {
    private root;
    /**
     * Inserts a new value into the binary search tree.
     * @param value The value to be inserted.
     */
    insert(value: T): void;
    /**
     * Searches for a value in the binary search tree.
     * @param value The value to search for.
     * @returns true if the value is found, false otherwise.
     */
    search(value: T): boolean;
    /**
     * Removes a value from the binary search tree.
     * @param value The value to be removed.
     */
    remove(value: T): void;
    private removeNode;
    private findMinNode;
}
/**
 * Represents a graph data structure.
 * @template T The type of elements stored in the graph.
 */
declare class Graph<T> {
    private vertices;
    /**
     * Adds a vertex to the graph.
     * @param vertex The vertex to be added.
     */
    addVertex(vertex: T): void;
    /**
     * Adds an edge between two vertices in the graph.
     * @param vertex1 The first vertex.
     * @param vertex2 The second vertex.
     */
    addEdge(vertex1: T, vertex2: T): void;
    /**
     * Removes a vertex from the graph.
     * @param vertex The vertex to be removed.
     */
    removeVertex(vertex: T): void;
    /**
     * Removes an edge between two vertices in the graph.
     * @param vertex1 The first vertex.
     * @param vertex2 The second vertex.
     */
    removeEdge(vertex1: T, vertex2: T): void;
    /**
     * Checks if the graph contains a vertex.
     * @param vertex The vertex to search for.
     * @returns true if the vertex is found, false otherwise.
     */
    containsVertex(vertex: T): boolean;
    /**
     * Checks if the graph contains an edge between two vertices.
     * @param vertex1 The first vertex.
     * @param vertex2 The second vertex.
     * @returns true if the edge is found, false otherwise.
     */
    containsEdge(vertex1: T, vertex2: T): boolean;
    /**
     * Returns the number of vertices in the graph.
     * @returns The number of vertices in the graph.
     */
    size(): number;
    /**
     * Returns the number of edges in the graph.
     * @returns The number of edges in the graph.
     */
    numberOfEdges(): number;
    /**
     * Returns an array of all vertices in the graph.
     * @returns An array of all vertices in the graph.
     */
    getVertices(): string[];
    /**
     * Returns an array of all adjacent vertices of a given vertex.
     * @param vertex The vertex to search for.
     * @returns An array of all adjacent vertices of the given vertex.
     */
    getAdjacentVertices(vertex: T): T[];
}
export { HashMap, Stack, Queue, BinarySearchTree, Graph };
