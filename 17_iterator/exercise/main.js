class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    // this.parent = null;
    // if (this.left) {
    //   this.left.parent = this;
    // }
    // if (this.right) {
    //   this.right.parent = this;
    // }
  }

  *preorder() {
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
    for (let node of traverse(this)) {
      yield node.value;
    }
  }
}

let root = new Node(1, new Node(2), new Node(3));

for (let n of root.preorder()) {
  console.log(n);
}
