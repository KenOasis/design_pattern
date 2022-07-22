//    1
//   / \
//  2   3

// in-order (root in middle): 2-1-3
// preorder (root first): 1-2-3
// postorder (root last): 2-3-1

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = null;
    if (this.left) {
      this.left.parent = this;
    }
    if (this.right) {
      this.right.parent = this;
    }
  }
}

function makeInOrderIterator(root) {
  let current = root;
  while (current.left) {
    current = current.left;
  }
  let yieldedStart = false;
  return {
    next: function () {
      if (!yieldedStart) {
        yieldedStart = true;
        return {
          value: current,
          done: false,
        };
      }
      if (current.right) {
        current = current.right;
        while (current.left) {
          current = current.left;
        }
        return {
          value: current,
          done: false,
        };
      } else {
        let p = current.parent;
        while (p && current === p.right) {
          current = p;
          p = p.parent;
        }
        current = p;
        return {
          value: current,
          done: current === null,
        };
      }
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
}

class BinaryTree {
  constructor(rootNode) {
    this.rootNode = rootNode;
  }
  [Symbol.iterator]() {
    return makeInOrderIterator(this.rootNode);
  }

  *betterInorder() {
    console.log("call yield");
    function* traverse(current) {
      if (current.left) {
        for (let left of traverse(current.left)) {
          yield left;
        }
      }
      yield current;
      if (current.right) {
        for (let right of traverse(current.right)) {
          yield right;
        }
      }
    }
    for (let node of traverse(this.rootNode)) {
      yield node;
    }
  }
}
let root = new Node(1, new Node(2), new Node(3));

// let it = makeInOrderIterator(root);
for (let n of new BinaryTree(root).betterInorder()) {
  console.log(n.value);
}
