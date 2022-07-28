// 1 + (2 + 3)
// Intrusive means the visitor has to modify each visitee to fullfill the visiting
class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  print(buffer) {
    buffer.push(this.value.toString());
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  print(buffer) {
    buffer.push("(");
    this.left.print(buffer);
    buffer.push("+");
    this.right.print(buffer);
    buffer.push(")");
  }
}

let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(new NumberExpression(2), new NumberExpression(3))
);

// at this scene, the buffer is the visitor (which visiting the expression objects and tranfer them into a string)
// cons: this method violate the open-closed principle which we have to modify every class (print methods) when we need to change the logic of visitor
// logic of vistor
let buffer = [];
e.print(buffer);

console.log(buffer.join(""));
