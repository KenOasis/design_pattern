class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
}

function area(rectangle) {
  return rectangle._width * rectangle._height;
}

// build an adapter called SquareToRectangleAdapter
// s.t. we could call
//
// let sq = new Square(123);
// area(new SquareToRectangleAdapter(sq));

class SquareToRectangleAdapter {
  constructor(square) {
    this._width = square.side;
    this._height = square.side;
  }
}

let rect = new Rectangle(2, 6);
let square = new Square(5);
console.log(area(rect));
console.log(area(new SquareToRectangleAdapter(square)));
