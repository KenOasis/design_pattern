// 1 + (2 + 3)
// We only have to modify each class once so we could visit each class by different vistors
// Pros: For each kind of visitor we only need to implment the interface with their logic.
// the code also organized
class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  accept(visitor) {
    visitor.visitNumber(this);
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  accept(visitor) {
    visitor.visitAddition(this);
  }
}

class Visitor {
  constructor() {
    this.buffer = [];
  }

  visitNumber(e) {}
  visitAddition(e) {}
}

class ExpressionPrinter extends Visitor {
  constructor() {
    super();
  }

  visitNumber(e) {
    this.buffer.push(e.value);
  }

  visitAddition(e) {
    this.buffer.push("(");
    e.left.accept(this);
    this.buffer.push("+");
    e.right.accept(this);
    this.buffer.push(")");
  }

  toString() {
    return this.buffer.join("");
  }
}

class AdditionCalculator extends Visitor {
  constructor() {
    super();
    this.result = 0;
  }

  visitNumber(e) {
    this.result += e.value;
  }

  visitAddition(e) {
    e.left.accept(this);
    e.right.accept(this);
  }

  getAnswer() {
    return this.result;
  }
}

let e = new AdditionExpression(
  new NumberExpression(4),
  new AdditionExpression(new NumberExpression(5), new NumberExpression(6))
);

let ep = new ExpressionPrinter();
ep.visitAddition(e);
console.log(ep.toString());

let ac = new AdditionCalculator();
ac.visitAddition(e);
console.log(ep.toString() + "=" + ac.getAnswer());
