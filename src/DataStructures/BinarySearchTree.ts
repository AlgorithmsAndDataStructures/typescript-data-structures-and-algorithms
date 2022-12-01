import Queue from "./Queue";
import Stack from "./Stack";

class BSTNode{
  leftNode: BSTNode;
  rightNode: BSTNode;
  value: number;
  constructor(value: number, leftNode: BSTNode | null = null, rightNode: BSTNode | null = null ) {
    this.leftNode = leftNode;
    this.rightNode = rightNode;
    this.value = value;
  }
}

class BinarySearchTree{
  size: number;
  root: BSTNode;
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(value: number) {
    const newNode = new BSTNode(value);
    if (!this.root) this.root = newNode;
    else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.leftNode) {
            currentNode.leftNode = newNode;
            break;
          }
          currentNode = currentNode.leftNode;
        } else {
          if (!currentNode.rightNode) {
            currentNode.rightNode = newNode;
            break;
          }
          currentNode = currentNode.rightNode;
        }
      }
    }
    this.size++;
    return this.root;
  }

  contains(value: number): boolean {
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.leftNode;
      } else if(value > currentNode.value){
        currentNode = currentNode.rightNode;
      } else {
        return true;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    let queue = new Queue<BSTNode>();
    let treeValues: Array<number> = [];
    queue.enqueue(this.root);
    while (queue.size > 0) {
      const currentNode = queue.dequeue();
      treeValues.push(currentNode.value);
      if (currentNode.leftNode) {
        queue.enqueue(currentNode.leftNode);
      }
      if (currentNode.rightNode) {
        queue.enqueue(currentNode.rightNode);
      }
    }
    return treeValues;
  }

  levelOrder(): number[][] {
    if(!this.root) return [];
    let nodes: number[][] = [];
    let queue: Queue<{ node: BSTNode, level: number }> = new Queue();
    let treeLevel = 0;
    let levelArray = [];
    queue.enqueue({node: this.root, level: 0});
    while(queue.size){
        const result = queue.dequeue();
        if(result){
            const currentNode = result.node;
            const currentLevel = result.level;
            if(levelArray.length && treeLevel<currentLevel){
                nodes.push(levelArray);
                levelArray = [];
                treeLevel = currentLevel;
            }
            levelArray.push(currentNode.value);
            if(currentNode && currentNode.leftNode){
                queue.enqueue({node: currentNode.leftNode, level: currentLevel+1});
            }
            if(currentNode && currentNode.rightNode){
                queue.enqueue({node: currentNode.rightNode, level: currentLevel+1});
            }
        }
    }
    if(levelArray.length) nodes.push(levelArray);
    return nodes;
  };

  zigzagLevelOrder(): number[][] {
    if (!this.root) return null;
    let queue = new Queue<{ node: BSTNode, level: number }>();
    let queueOpp = new Queue<{ node: BSTNode, level: number }>();
    let queueLevel = 0;
    let result = [];
    let levelArray = [];
    queue.enqueue({ node: this.root, level: 0 });
    queueOpp.enqueue({ node: this.root, level: 0 });
    while (queue.size || queueOpp.size) {
      const nodeDetails = queue.dequeue();
      const nodeOppDetails = queueOpp.dequeue();
      if (nodeDetails) {
        const currentLevel = nodeDetails.level;
        const currentNode = nodeDetails.node;
        if (queueLevel !== currentLevel) {
          result.push(levelArray);
          levelArray = [];
          queueLevel = currentLevel;
        }
        if (currentLevel % 2 === 0)
          levelArray.push(currentNode.value);
        if (currentNode && currentNode.leftNode)
          queue.enqueue({ node: currentNode.leftNode, level: currentLevel + 1 });
        if (currentNode && currentNode.rightNode)
          queue.enqueue({ node: currentNode.rightNode, level: currentLevel + 1 });
      }
      if (nodeOppDetails) {
        const currentLevel = nodeOppDetails.level;
        const currentNode = nodeOppDetails.node;
        if (queueLevel !== currentLevel) {
          result.push(levelArray);
          levelArray = [];
          queueLevel = currentLevel;
        }
        if (currentLevel % 2 === 1)
          levelArray.push(currentNode.value);
        if (currentNode && currentNode.rightNode)
          queueOpp.enqueue({ node: currentNode.rightNode, level: currentLevel + 1 });
        if (currentNode && currentNode.leftNode)
          queueOpp.enqueue({ node: currentNode.leftNode, level: currentLevel + 1 });
      }
    }
    if (levelArray.length) {
      result.push(levelArray);
    }
    return result;
  }

  depthFirstSearchPreOrder() {
    let treeValues: Array<number> = [];
    (function preOrder(currentNode: BSTNode) {
      if (!currentNode) return;
      treeValues.push(currentNode.value);
      preOrder(currentNode.leftNode);
      preOrder(currentNode.rightNode);
    })(this.root);
    return treeValues;
  }

  depthFirstSearchInOrder() {
    let treeValues: Array<number> = [];
    (function inOrder(currentNode: BSTNode) {
      if (!currentNode) return;
      inOrder(currentNode.leftNode);
      treeValues.push(currentNode.value);
      inOrder(currentNode.rightNode);
    })(this.root);
    return treeValues;
  }

  depthFirstSearchPostOrder() {
    let treeValues: Array<number> = [];
    (function postOrder(currentNode: BSTNode) {
      if (!currentNode) return;
      postOrder(currentNode.leftNode);
      postOrder(currentNode.rightNode);
      treeValues.push(currentNode.value);
    })(this.root);
    return treeValues;
  }

  depthFirstSearchPreOrderIterative() {
    let treeValues: Array<number> = [];
    let stack: Stack<BSTNode> = new Stack();
    stack.push(this.root);
    while (stack.size) {
      const currentNode = stack.pop();
      treeValues.push(currentNode.value);
      if (currentNode.rightNode) stack.push(currentNode.rightNode);
      if (currentNode.leftNode) stack.push(currentNode.leftNode);
    }
    return treeValues;
  }



  determineRootNode(n1: number, n2: number) {
    let root: number = null;

    (function postOrder(currentNode: BSTNode, p1, p2) {
      if (!currentNode) return false;
      const checkLeft = postOrder(currentNode.leftNode, p1, p2);
      const checkRight = postOrder(currentNode.rightNode, p1, p2);
      const checkCurrent = p1 === currentNode.value || p2 === currentNode.value;
      if (
        (checkCurrent && checkLeft) ||
        (checkCurrent && checkRight) ||
        (checkLeft && checkRight)
      )
        root = currentNode.value;

      return checkCurrent || checkLeft || checkRight;
    })(this.root, n1, n2);
    return root;
  }

  determineRootNodeBSTSpecific(n1: number, n2: number) {
    let root: number = null;

    (function postOrder(currentNode: BSTNode, p1, p2) {
      if (!currentNode) return false;
      let checkLeft = false, checkRight = false;
      if (p1 < currentNode.value || p2 < currentNode.value)
        checkLeft = postOrder(currentNode.leftNode, p1, p2);
      if (p1 > currentNode.value || p2 > currentNode.value)
        checkRight = postOrder(currentNode.rightNode, p1, p2);
      const checkCurrent = p1 === currentNode.value || p2 === currentNode.value;
      if (
        (checkCurrent && checkLeft) ||
        (checkCurrent && checkRight) ||
        (checkLeft && checkRight)
      )
        root = currentNode.value;

      return checkCurrent || checkLeft || checkRight;
    })(this.root, n1, n2);
    return root;
  }

  determineRootNodeBSTSpecific2(n1: number, n2: number) {
    let root: BSTNode = null;

    root = (function postOrder(currentNode: BSTNode, p1, p2) {
      if (p1 < currentNode.value && p2 < currentNode.value)
        return postOrder(currentNode.leftNode, p1, p2);
      else if (p1 > currentNode.value && p2 > currentNode.value)
        return postOrder(currentNode.rightNode, p1, p2);
      else
        return currentNode;
    })(this.root, n1, n2);
    return root.value;
  }

  buildTree(preorder: Array<number>, inorder: Array<number>): void {
    let preOrderIndex = 0;
    let inorderIndex: { [key: number]: number } = {};
    for (let i = 0; i < inorder.length; i++){
      inorderIndex[inorder[i]] = i;
    }

    const root = (function recreate(left: number, right: number): BSTNode | null {
      if (left === right) return null;
      const rootValue = preorder[preOrderIndex];
      preOrderIndex++;
      const r = inorderIndex[rootValue];
      const leftNode = recreate(left, r);
      const rightNode = recreate(r + 1, right);
      const node = new BSTNode(rootValue, leftNode, rightNode);
      console.log(`${JSON.stringify(node)}, PreOrderIndex: ${preOrderIndex}`);

      return node;
    })(0, inorder.length);

    this.root = root;
    console.log(root);
  }

  buildTree2(preorder: number[], inorder: number[]): void {
    let preorderIndex = 0;

    const root = (function recreate(start: number, end: number): BSTNode | null {
      // pop from preorder
      if (start === end) {
        return null;
      }
      const rootValue = preorder[preorderIndex];
      preorderIndex++
      let position = start;
      // find position of pop value in inorder
      for (let i = start; i < end; i++) {
        if (rootValue === inorder[i]) {
          position = i;
          break;
        }
      }
      const leftNode = recreate(start, position);
      const rightNode = recreate(position + 1, end);
      return new BSTNode(rootValue, leftNode, rightNode);
    })(0, inorder.length);
    console.log(root);
    this.root = root;
  }
}

export default BinarySearchTree;
