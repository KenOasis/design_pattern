// 1 + (2 + 3)
// Reflective means the visitor do not has to modify each visitee to fullfill the visiting. Instead it
// visitor and handle it accordingly based on visitees' type.
class NumberExpression {
  constructor(value) {
    this.value = value;
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

class ExpressionPrinter {
  // cos: we have to implement separate method of if...else to handle a specific type of class
  print(e, buffer) {
    if (e instanceof NumberExpression) {
      buffer.push(e.value);
    } else if (e instanceof AdditionExpression) {
      buffer.push("(");
      this.print(e.left, buffer);
      buffer.push("+");
      this.print(e.right, buffer);
      buffer.push(")");
    }
  }
}

let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(new NumberExpression(2), new NumberExpression(3))
);

let printer = new ExpressionPrinter(e);
let buffer = [];
printer.print(e, buffer);
console.log(buffer.join(""));
