import BinarySearchTree from './DataStructures/BinarySearchTree';
import Graph from './DataStructures/Graph/Graph';
import HashTable from './DataStructures/HashTables';
import DoublyLinkedList from './DataStructures/LinkedList/DoublyLinkedList';
import SinglyLinkedList from './DataStructures/LinkedList/SinglyLinkedList';
import MaxBinaryHeapNode from './DataStructures/MaxBinaryHeap';
import PriorityQueue from './DataStructures/PriorityQueue';
import Queue from './DataStructures/Queue';
import Stack from './DataStructures/Stack';
import { binarySearchIterative, binarySearchRecussive } from './Algorithms/search/BinarySearch';
import { KMPStringSearchRecusive, KMPStringSearchIterative } from './Algorithms/search/KMPStringSearch';
import naiveStringSearch from './Algorithms/search/NaiveStringSearch';
import bubbleSort from './Algorithms/sort/BubbleSort';
import insertionSort from './Algorithms/sort/InsertionSort';
import utiliseMergeSort from './Algorithms/sort/MergeSort';
import utiliseQuickSort from './Algorithms/sort/QuickSort';
import quickSort from './Algorithms/sort/QuickSort';
import rudixSort from './Algorithms/sort/RudixSort';
import selectionSort from './Algorithms/sort/SelectionSort';
import WeightedGraph from './DataStructures/Graph/WeightedGraph';
import { fibonacciNumbersMemo, fibonacciNumbersTabulation } from './Algorithms/FibonacciNumbers';
import { isPalindrome, isValid, longestPalSubstr, reverseString, reverseWords, reverseWords2 } from './Algorithms/isPalindrone';
import { groupAnagrams, myAtoi, trap, trap2, trap3 } from './Algorithms/groupAnagrams';
import { setZeroes, setZeroes2 } from './Algorithms/setZeros';
import Matrix, { spiralOrder } from './Algorithms/rotateMatrix';
import { addTwoNumbers, addTwoNumbers2, CNode, copyRandomList, getIntersectionNode, ListNode, mergeKLists, mergeTwoLists, reverseList } from './AddTwoNumbers';
import { numIslands, numIslandsRecussive } from './Algorithms/numIslands';
import { cloneGraph, GraphNode } from './DataStructures/Graph/cloneGraph';
import { convertToBinary, findMin, findMin2, getNumberAtPosition, lengthNumber, longestBinaryGap, merge, merge2, removeDuplicates, searchMatrix } from './Algorithms/removeDuplicates';
import { isMatch, isMatch2, letterCombinations, removeDuplicatesString } from './Algorithms/isMatch';
import { solution } from './Algorithms/test';
import { htmlTagConversion } from './HTMLTagConversion';

// console.log(`MergeSort: ${utiliseMergeSort([2, 3, 5, 3, 1, 7, 5, 8, 4])}`);
// console.log(`BubbleSort: ${bubbleSort([2, 4, 6, 9, 1, 7, 5, 8, 3])}`);
// console.log(`InsertionSort: ${insertionSort([8, 4, 7, 3, 5, 1, 2, 6, 9])}`);
// console.log(`SelectionSort: ${selectionSort([2, 4, 6, 7, 9, 1, 7, 5, 8, 3])}`);

// let parentString = 'adsgwadsxdsgwadsgz';
// let subString = 'dsgwadsgz';

// console.log(`Number of time substring appears recussive: ${KMPStringSearchRecusive(parentString, subString)}`);
// console.log(`Number of time substring appears iterative: ${KMPStringSearchIterative(parentString, subString)}`);
// console.log(`Number of time substring appears naive string search: ${naiveStringSearch(parentString, subString)}`);

// let malmike = [1,2,3,4,5,6,7,8];
// console.log(`Binary Search: ${binarySearchRecussive(malmike, 8, 0, malmike.length-1)}`);
// console.log(`Binary Search Iterative: ${binarySearchIterative(malmike, 19)}`);

// let testArray = [8, 3, 65, 1, 6, 8, 2, 3, 6, -23, -62, 82 ];
// console.log(`QuickSort: ${utiliseQuickSort(testArray)}`);

// console.log(`RudixSort : ${rudixSort([34252,5232,612321,23,7122,23468,21,3])}`);

// let singlyLinkedList = new SinglyLinkedList<number>();
// singlyLinkedList.push(9);
// singlyLinkedList.printList();
// singlyLinkedList.unshift(2);
// singlyLinkedList.printList();
// singlyLinkedList.push(5);
// singlyLinkedList.printList();
// singlyLinkedList.unshift(1);
// singlyLinkedList.printList();


// const nodeG = singlyLinkedList.getNode(2);
// console.log(`Node fetched at position 2: ${nodeG.value}`);

// const nodeS = singlyLinkedList.setNode(2, 4);
// console.log(`Node value at position 2 set to 7: ${nodeS.value}`);

// singlyLinkedList.insert(2, 3);
// singlyLinkedList.printList();

// singlyLinkedList.reverse();
// singlyLinkedList.printList();

// console.log(`Remove: ${JSON.stringify(singlyLinkedList.remove(2))}`);
// singlyLinkedList.printList();

// singlyLinkedList.pop();
// singlyLinkedList.printList();
// singlyLinkedList.shift();
// singlyLinkedList.printList();
// console.log(`Pop: ${JSON.stringify(singlyLinkedList.pop())}`);
// singlyLinkedList.printList();
// console.log(`Shift: ${JSON.stringify(singlyLinkedList.shift())}`);
// singlyLinkedList.printList();

// let doublyLinkedList = new DoublyLinkedList<number>();
// doublyLinkedList.push(9);
// doublyLinkedList.printList();
// doublyLinkedList.unshift(2);
// doublyLinkedList.printList();
// doublyLinkedList.push(5);
// doublyLinkedList.printList();
// doublyLinkedList.unshift(1);
// doublyLinkedList.printList();

// const nodeS = doublyLinkedList.setNode(2, 4);
// console.log(`Node value at position 3 set to 7: ${nodeS.value}`);

// doublyLinkedList.printList();

// doublyLinkedList.insert(2, 3);
// doublyLinkedList.printList();

// const nodeG = doublyLinkedList.getNode(3);
// console.log(`Node fetched at position 3: ${nodeG.value}`);

// const nodeG2 = doublyLinkedList.getNode(1);
// console.log(`Node fetched at position 1: ${nodeG2.value}`);

// doublyLinkedList.printReverse();

// console.log(`Remove: ${JSON.stringify(doublyLinkedList.remove(2))}`);
// doublyLinkedList.printList();

// doublyLinkedList.pop();
// doublyLinkedList.printList();
// doublyLinkedList.shift();
// doublyLinkedList.printList();
// console.log(`Pop: ${JSON.stringify(doublyLinkedList.pop())}`);
// doublyLinkedList.printList();
// console.log(`Shift: ${JSON.stringify(doublyLinkedList.shift())}`);
// doublyLinkedList.printList();

// let stack = new Stack<number>();
// stack.push(4);
// stack.push(3);
// stack.push(2);
// stack.push(1);
// console.log(`Stack length: ${stack.size}`);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());


// let queue = new Queue<number>();
// queue.enqueue(4);
// queue.enqueue(3);
// queue.enqueue(2);
// queue.enqueue(1);
// console.log(`Queue length: ${queue.size}`);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

// let binarySearchTree = new BinarySearchTree<number>();
// binarySearchTree.insert(10);
// binarySearchTree.insert(6);
// binarySearchTree.insert(15);
// binarySearchTree.insert(3);
// binarySearchTree.insert(8);
// binarySearchTree.insert(20);
// console.log(binarySearchTree.root);

// console.log(`Contains value 29: ${binarySearchTree.contains(8)}`);
// console.log(`Contains value 45: ${binarySearchTree.contains(4)}`);

// console.log(`BreadthFirstSearch: ${binarySearchTree.breadthFirstSearch()}`);
// console.log(`DepthFirstSearchPreOrder: ${binarySearchTree.depthFirstSearchPreOrder()}`);
// console.log(`DepthFirstSearchInOrder: ${binarySearchTree.depthFirstSearchInOrder()}`);
// console.log(`DepthFirstSearchPostOrder: ${binarySearchTree.depthFirstSearchPostOrder()}`);

// let maxBinaryHeap = new MaxBinaryHeapNode();
// maxBinaryHeap.push(33);
// maxBinaryHeap.printList();
// maxBinaryHeap.push(39);
// maxBinaryHeap.printList();
// maxBinaryHeap.push(41);
// maxBinaryHeap.printList();
// maxBinaryHeap.push(18);
// maxBinaryHeap.printList();
// maxBinaryHeap.push(27);
// maxBinaryHeap.printList();
// maxBinaryHeap.push(12);
// maxBinaryHeap.printList();

// console.log(`Max Value: ${maxBinaryHeap.extractMax()}`);
// maxBinaryHeap.printList();
// console.log(`Max Value: ${maxBinaryHeap.extractMax()}`);
// maxBinaryHeap.printList();
// console.log(`Max Value: ${maxBinaryHeap.extractMax()}`);
// maxBinaryHeap.printList();
// console.log(`Max Value: ${maxBinaryHeap.extractMax()}`);
// maxBinaryHeap.printList();
// console.log(`Max Value: ${maxBinaryHeap.extractMax()}`);
// maxBinaryHeap.printList();
// console.log(`Max Value: ${maxBinaryHeap.extractMax()}`);
// maxBinaryHeap.printList();
// console.log(`Max Value: ${maxBinaryHeap.extractMax()}`);

// let priorityQueue = new PriorityQueue<string>();
// priorityQueue.enqueue({priority: 4, value: "priority4"});
// priorityQueue.enqueue({priority: 2, value: "priority2"});
// priorityQueue.enqueue({priority: 2, value: "priority2,2"});
// priorityQueue.enqueue({priority: 1, value: "priority1"});
// priorityQueue.enqueue({priority: 5, value: "priority5"});
// priorityQueue.enqueue({priority: 3, value: "priority3"});

// console.log(`Highest Priority: ${priorityQueue.dequeue()}`);
// console.log(`Highest Priority: ${priorityQueue.dequeue()}`);
// console.log(`Highest Priority: ${priorityQueue.dequeue()}`);
// console.log(`Highest Priority: ${priorityQueue.dequeue()}`);
// console.log(`Highest Priority: ${priorityQueue.dequeue()}`);
// console.log(`Highest Priority: ${priorityQueue.dequeue()}`);
// console.log(`Highest Priority: ${priorityQueue.dequeue()}`);

// let hashTable = new HashTable<number>(11);
// hashTable.set('maroon', 32);
// hashTable.set('yellow', 52);
// hashTable.set('green', 63);
// hashTable.set('red', 23);
// hashTable.set('darkblue', 62);
// hashTable.set('salmon', 23);
// hashTable.set('pink', 11);
// console.log(hashTable.keys());
// console.log(hashTable.values());

// console.log(`Value at index pink: ${hashTable.get('pink')}`);
// hashTable.set('pink', 13);
// console.log(`Value at index pink: ${hashTable.get('pink')}`);

// hashTable.set('darkblue', 100);
// console.log(`Value at index darkblue: ${hashTable.get('darkblue')}`);

// console.log(hashTable.keys());
// console.log(hashTable.values());

// hashTable.delete('darkblue');
// console.log(hashTable.keys());
// console.log(hashTable.values());

// let graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');

// const dfsRecursive = graph.depthFirstSearchRecursive('A');
// console.log(dfsRecursive);

// const dfsIterative = graph.depthFirstSearchIterative('A');
// console.log(dfsIterative);

// const bfs = graph.breadthFirstSearch('A');
// console.log(bfs);

// graph.printAdjancencyList();

// graph.removeEdge('A', 'B');
// graph.printAdjancencyList();

// graph.removeVertex('C');
// graph.printAdjancencyList();

// let weightedGraph = new WeightedGraph();
// weightedGraph.addVertex('A');
// weightedGraph.addVertex('B');
// weightedGraph.addVertex('C');
// weightedGraph.addVertex('D');
// weightedGraph.addVertex('E');
// weightedGraph.addVertex('F');
// weightedGraph.addVertex('G');
// weightedGraph.addEdge('A', 'B', 4);
// weightedGraph.addEdge('A', 'C', 2);
// weightedGraph.addEdge('B', 'E', 3);
// weightedGraph.addEdge('C', 'D', 2);
// weightedGraph.addEdge('C', 'F', 4);
// weightedGraph.addEdge('D', 'E', 3);
// weightedGraph.addEdge('D', 'F', 1);
// weightedGraph.addEdge('E', 'F', 1);
// weightedGraph.addEdge('F', 'G', 1);
// weightedGraph.addEdge('A', 'G', 8);
// // weightedGraph.printAdjancencyList();

// console.log(weightedGraph.dijkstraAlgorithm('A', 'F'));
// console.log(weightedGraph.dijkstraAlgorithm('A', 'G'));
// console.log(weightedGraph.dijkstraAlgorithm('B', 'C'));
// console.log(weightedGraph.dijkstraAlgorithm('G', 'B'));

// const position = 50;
// const fibMemo = fibonacciNumbersMemo(position, [0,1,1]);
// console.log(`Fibonacci Memoization at position ${position}: ${fibMemo}`);

// const fibTabulation = fibonacciNumbersTabulation(position);
// console.log(`Fibonacci Tabulation at position ${position}: ${fibTabulation}`);


// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("thisisastestsetsasisiht"));
// console.log(isPalindrome("0P"));

// console.log(reverseString(['h', 'e', 'l', 'l', 'o']))

// console.log(reverseWords('  Bob    Loves  Alice   '));
// console.log(`:${reverseWords('  hello world  ')}:`);
//console.log(isValid('(){}[{}[]]'));

// console.log(longestPalSubstr('test'))
// console.log(longestPalSubstr('ggefek'))


// console.log(isAnagram2('tea', 'ate'));
// console.log(isAnagram2('', ''));
// console.log(isAnagram2('milk', 'kilm'));
// console.log(isAnagram2('rels', 'rela'));
// console.log(isAnagram2('makingk', 'makingt'));
// console.log(isAnagram2('makingk', 'making'));
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "tea"]));
// console.log(groupAnagrams(["", ""]));

// setZeroes([[0, 1, 2, 0],
// [3, 4, 5, 2],
// [1, 3, 1, 5]]);

//console.log(trap2([4, 2, 0, 3, 2, 5]));
// console.log(trap3([0,1,0,2,1,0,1,3,2,1,2,1]));

// console.log(myAtoi("2147483648"))

//console.log(setZeroes2([[1,1,1],[1,0,1],[1,1,1]]));


// const matrix = new Matrix(3, 4);
// matrix.addSampleData();
// console.log('Matrix 1');
// matrix.printMatrix();
// console.log('Rotate ClockWise')
// console.log(matrix.rotateMatrixClockWise());
// console.log('Rotate Anti ClockWise')
// console.log(matrix.rotateMatrixAntiClockWise());

// const matrix2 = new Matrix(4, 3);
// matrix2.addSampleData();
// console.log('Matrix 2');
// matrix2.printMatrix();
// console.log('Rotate ClockWise')
// console.log(matrix2.rotateMatrixClockWise());
// console.log('Rotate Anti ClockWise')
// console.log(matrix2.rotateMatrixAntiClockWise());

// const matrix3 = new Matrix(4, 4);
// matrix3.addSampleData();
// console.log('Matrix 4');
// matrix3.printMatrix();
// console.log('Rotate ClockWise')
// console.log(matrix3.rotateMatrixClockWise());
// console.log('Rotate Anti ClockWise')
// console.log(matrix3.rotateMatrixAntiClockWise());

// console.log(matrix3.spiralOrder())

// console.log(spiralOrder([[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]));

// const node = new ListNode(3);

// let l1 = new ListNode(2);

// let l2 = new ListNode(1);
// l2.next = new ListNode(3);
// l2.next.next = new ListNode(5);
// l2.next.next.next = new ListNode(7);
// l2.next.next.next.next = new ListNode(9);
// l2.next.next.next.next.next = new ListNode(11);
// l2.next.next.next.next.next.next = new ListNode(13);
// l2.next.next.next.next.next.next.next = new ListNode(15);
// l2.next.next.next.next.next.next.next.next = new ListNode(17);
// l2.next.next.next.next.next.next.next.next.next = new ListNode(19);
// l2.next.next.next.next.next.next.next.next.next.next = new ListNode(21);

// console.log(getIntersectionNode(l2, l1));

// let l4 = new ListNode(2);

// let l3 = mergeKLists([l1, l2, l4]);

// let value = '';
// let size = 0;
// while (l3 && size < 20) {
//   value += l3.val+', ';
//   l3 = l3.next;
//   size++;
// }
// console.log(value);

// console.log(size)


// let l3 = new CNode(7, null);
// l3.next = new CNode(13, l3);
// l3.next.next = new CNode(11);
// l3.next.next.next = new CNode(10, l3.next.next);
// l3.next.next.next.next = new CNode(1, l3);
// l3.next.next.random = l3.next.next.next.next;

// //console.log(l3);

// copyRandomList(l3);



// let bst = new BinarySearchTree<number>();
// bst.insert(6)
// bst.insert(2)
// bst.insert(8)
// bst.insert(0)
// bst.insert(4)
// bst.insert(7)
// bst.insert(9)
// bst.insert(3)
// bst.insert(5)
// console.log(bst.depthFirstSearchPreOrderIterative())
// console.log(bst.depthFirstSearchPreOrder())
// console.log(bst.determineRootNodeBSTSpecific2(11, 9))

// const check = [
//   //0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18   19
//   ["1", "0", "0", "1", "1", "1", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], // 0
//   ["1", "0", "0", "1", "1", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "0", "1", "0"], // 1
//   ["0", "0", "0", "1", "1", "1", "1", "0", "1", "0", "1", "1", "0", "0", "0", "0", "1", "0", "1", "0"], // 2
//   ["0", "0", "0", "1", "1", "0", "0", "1", "0", "0", "0", "1", "1", "1", "0", "0", "1", "0", "0", "1"], // 3
//   ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], // 4
//   ["1", "0", "0", "0", "0", "1", "0", "1", "0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "0", "1"], // 5
//   ["0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1"], // 6
//   ["0", "0", "0", "1", "0", "1", "0", "0", "1", "1", "0", "1", "0", "1", "1", "0", "1", "1", "1", "0"], // 7
//   ["0", "0", "0", "0", "1", "0", "0", "1", "1", "0", "0", "0", "0", "1", "0", "0", "0", "1", "0", "1"], // 8
//   ["0", "0", "1", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "0", "1", "0", "0", "0", "1", "0"], // 9
//   ["1", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "1", "0", "1", "0", "1", "0"], // 10
//   ["0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "1", "0", "1", "1", "1", "0", "1", "1", "0", "0"], // 11
//   ["1", "1", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "1"], // 12
//   ["0", "1", "0", "0", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1", "0", "1", "0", "0", "0"], // 13
//   ["0", "0", "1", "1", "1", "0", "0", "0", "1", "1", "0", "0", "0", "1", "0", "1", "0", "0", "0", "0"], // 14
//   ["1", "0", "0", "1", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "1"], // 15
//   ["1", "0", "1", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "0", "0", "0"], // 16
//   ["0", "1", "1", "0", "0", "0", "1", "1", "1", "0", "1", "0", "1", "0", "1", "1", "1", "1", "0", "0"], // 17
//   ["0", "1", "0", "0", "0", "0", "1", "1", "0", "0", "1", "0", "1", "0", "0", "1", "0", "0", "1", "1"], // 18
//   ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "1", "0", "0", "0", "1", "1", "0", "0", "0"]  // 19
// ];

// const check2 = [["1", "0", "1"], ["0", "1", "0"], ["1", "0", "1"]];

// console.log(numIslandsRecussive(check2));
// console.log(numIslands(check2));


// let bst = new BinarySearchTree();

// const preOrder = [
//   6, 2, 0, 4, 3,
//   5, 8, 7, 9
// ];

// const inOrder = [
//   0, 2, 3, 4, 5,
//   6, 7, 8, 9
// ];

// bst.buildTree2(preOrder, inOrder);

// console.log(bst.depthFirstSearchPreOrder());
// console.log(bst.depthFirstSearchInOrder());

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');

// const gNodeA = new GraphNode(1);
// const gNodeB = new GraphNode(2);
// const gNodeC = new GraphNode(3);
// const gNodeD = new GraphNode(4);
// const gNodeE = new GraphNode(5);
// const gNodeF = new GraphNode(6);

// gNodeA.neighbors= [gNodeB, gNodeC];
// gNodeB.neighbors= [gNodeD];
// gNodeC.neighbors= [gNodeE];
// gNodeD.neighbors= [gNodeE, gNodeF];
// gNodeE.neighbors = [gNodeF];

// const copy = cloneGraph(gNodeA);
// console.log(JSON.stringify(gNodeA));

// let bst = new BinarySearchTree();
// bst.insert(6)
// bst.insert(2)
// bst.insert(8)
// bst.insert(0)
// bst.insert(4)
// bst.insert(7)
// bst.insert(9)
// bst.insert(3)
// bst.insert(5)

// console.log(bst.levelOrder());
// console.log(bst.zigzagLevelOrder());

// let x = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(x));
// console.log(x)


// let nums1 = [1,2,3,0,0,0]
// let l = 3
// let nums2 = [2,5,6]
// let l2 = 3

// merge2(nums1, l, nums2, l2);
// console.log(nums1);

// let buckets: Array<Array<number>> = new Array<Array<number>>(3).fill([]).map(() => Array());
// buckets[2].push(1);
// console.log(buckets);

// console.log(findMin([2,1,2]));

// let matrix: Array<Array<number>> = new Array<Array<number>>(3).fill([]).map(() => Array(3));
// let i = 3;
// for (let j = 0; j < matrix.length; j++){
//   for (let k = 0; k < matrix[j].length; k++){
//     matrix[j][k] = i;
//     i = i + 2;
//   }
// }

// console.log(matrix);

// console.log(searchMatrix(matrix, 1));

// console.log(isMatch("ab", "?*"));

// console.log(convertToBinary(0));
// console.log(longestBinaryGap(99999));
// const num = 10000000000000000 + 1000011010011111
// console.log(num);


// console.log(isMatch2('abcabczzzde', '*abc???de*'));
// `${1},${2}`
// const numMap = {
//     '2': ['a', 'b', 'c'],
//     '3': ['d', 'e', 'f'],
//     '4': ['g', 'h', 'i'],
//     '5': ['j', 'k', 'l'],
//     '6': ['m', 'n', 'o'],
//     '7': ['p', 'q', 'r', 's'],
//     '8': ['t', 'u', 'v'],
//     '9': ['w', 'x', 'y', 'z']
// }

// console.log(letterCombinations(""));

// console.log(solution(`13 DUP 4 POP 5 DUP + DUP + -`));

const htmlString1 = '<p>Sample</p>';
const htmlString2 = '<p>Test Summary</p>';
const htmlString3 = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p><p><br></p>';
const htmlString4 = '<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span></p>';
const htmlString5 = '<p><span class="ql-cursor">﻿</span><strong>Test Title</strong></p><p><strong><em>Subtitle </em></strong></p><p><em>Information header</em></p><p><u>Note to self</u></p><ol><li>Everything</li><li>Not to say</li></ol><p><u>Note 2</u></p><ul><li>All the above</li><li>With that sail</li><li class="ql-indent-1">Never say die</li><li class="ql-indent-1">All I can say</li></ul><p><a href="https://www.google.com/" target="_blank">Link to all </a></p><p><span class="ql-size-huge">Heading 1</span></p><p><span class="ql-size-large">Subheading 2</span></p><p>Normal text</p><p><span class="ql-size-small">Hidden text</span></p>';

const result = htmlTagConversion(htmlString5);
console.log(result);
