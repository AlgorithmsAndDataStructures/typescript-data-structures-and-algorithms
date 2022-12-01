export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0);
  let currentNode = dummyHead;
  let carry = 0;
  while (l1 || l2) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    let sum = l1Val + l2Val + carry;

    carry = Math.floor(sum / 10);
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;
    if(l1)l1 = l1.next;
    if(l2)l2 = l2.next;
  }
  if (carry > 0) {
    currentNode.next = new ListNode(carry);
  }
  console.log(dummyHead);
  return dummyHead.next;
}

export function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0);
  let currentNode = dummyHead;
  let l1Size = 0, l2Size = 0, l1R = l1, l2R = l2;
  while (l1R) {
    l1Size++;
    l1R = l1R.next;
  }
  while (l2R) {
    l2Size++;
    l2R = l2R.next;
  }

  while (currentNode) {
    if (l1Size > l2Size) {
      currentNode.next = new ListNode(l1.val);
      l1 = l1.next;
      l1Size--;
    }
    else if (l2Size < l1Size) {
      currentNode.next = new ListNode(l1.val);
      l2 = l2.next;
      l2Size--;
    } else {
      let l1Val = l1 ? l1.val : 0;
      let l2Val = l2 ? l2.val : 0;
      currentNode.next = new ListNode(l1Val + l2Val);
      if(l1) l1 = l1.next;
      if(l2) l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  return dummyHead;
}

export function reverseList(l1: ListNode) {
  let currentNode = l1;
  let prevNode = null;
  let nextNode = null;
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    if(!nextNode) break;
    currentNode = nextNode;
  }
  return currentNode;
}


export function mergeTwoLists2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  let currentNode: ListNode | null = l1;
  let previousNode = null;
  while (currentNode && l2) {
    if (currentNode && l2) {
      if (currentNode.val > l2.val) {
        let l2next = l2.next;
        if (previousNode) previousNode.next = l2;
        l2.next = currentNode;
        previousNode = l2;
        l2 = l2next;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    if (currentNode === null && l2) {
      previousNode.next = l2;
      break;
    }
  }
  return l1;
}

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  let preHead = new ListNode(-1);
  let previousNode = preHead;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      previousNode.next = l2;
      previousNode = previousNode.next;
      l2 = l2.next;
    } else {
      previousNode.next = l1;
      previousNode = previousNode.next;
      l1 = l1.next;
    }
  }

  if (l1 !== null) {
    previousNode.next = l1;
  }
  if (l2 !== null) {
    previousNode.next = l2;
  }
  return preHead.next;
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let preHead = new ListNode(-1);
  for (let list of lists) {
    preHead.next = mergeTwoLists(preHead.next, list);
  }
  return preHead.next;
};

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let l1 = headA;
  let l2 = headB;
  let i = 0;
  while (l1 && l2) {
    if (l1 == l2) return l1;
    if (!l1.next) {
      if (i == 2) return null
      l1 = headB;
      i++;
    } else l1 = l1.next;
    if (!l2.next) {
      if (i == 2) return null
      l2 = headA;
      i++
    } else l2 = l2.next;
  }
  return null
}

export class CNode {
  val: number
  next: CNode | null
  random: CNode | null
  constructor(val?: number, next?: CNode, random?: CNode) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

export function copyRandomList(head: CNode | null): CNode | null {
  if (!head) return null;
  let arr: Array<CNode> = [];
  let arr2: Array<CNode> = [];
  let list2 = new CNode(-1);
  let previous: CNode | null = list2;

  console.log('this is reached')
  let current = head;
  while (current) {
    previous.next = new CNode(current.val);
    console.log(current.val);
    previous = previous.next
    arr2.push(previous);
    arr.push(current);
    ccurrent.next;
  }
  console.log(list2);
  current = head;
  console.log('this is reached')
  // if(list2.next){
  //     previous = list2.next;
  //     while(current){
  //         if(current.random === null) previous.random = null;
  //         else{
  //             let i = 0;
  //             while(i < arr.length){
  //                 if(current.random === arr[i]){
  //                     previous.random = arr2[i];
  //                     break;
  //                 }
  //                 i++;
  //             }
  //         }
  //         previous.next;
  //         current.next;
  //     }
  // }
  console.log('this is reached')
  console.log(list2.next);
  return list2.next;
};




