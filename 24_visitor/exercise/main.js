class Integer {
  constructor(value) {
    this.value = value;
  }
}

class BinaryExpression {
  constructor(lhs, rhs) {
    this.lhs = lhs;
    this.rhs = rhs;
  }
}

class AdditionExpression extends BinaryExpression {
  constructor(lhs, rhs) {
    super(lhs, rhs);
  }
}

class MultiplicationExpression extends BinaryExpression {
  constructor(lhs, rhs) {
    super(lhs, rhs);
  }
}

class ExpressionPrinter {
  constructor() {
    this.buffer = [];
  }

  visit(e) {
    if (e instanceof Integer) {
      this.visitValue(e.value);
    } else if (e instanceof AdditionExpression) {
      this.visitAddition(e);
    } else if (e instanceof MultiplicationExpression) {
      this.visitMultiplication(e);
    }
  }

  visitValue(value) {
    this.buffer.push(value.toString());
  }

  visitAddition(ae) {
    this.buffer.push("(");
    this.visit(ae.lhs);
    this.buffer.push("+");
    this.visit(ae.rhs);
    this.buffer.push(")");
  }

  visitMultiplication(me) {
    this.visit(me.lhs);
    this.buffer.push("*");
    this.visit(me.rhs);
  }

  toString() {
    return this.buffer.join("");
  }
}
// 5 + (3 + 4) * 7
let e = new AdditionExpression(
  new Integer(5),
  new MultiplicationExpression(
    new AdditionExpression(new Integer(3), new Integer(4)),
    new Integer(7)
  )
);

let ep = new ExpressionPrinter();
ep.visitAddition(e);
console.log(ep.toString());
