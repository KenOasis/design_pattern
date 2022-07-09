// Liskov Substitution Principles:
// If a function could take a base class, it could also take the derived(of the base class) class
// as well without breaking the functionality in any where any time.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  toString() {
    return `${this.width} x ${this.height}`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let rc = new Rectangle(2, 3);
console.log(rc.toString());

let sq = new Square(5);
console.log(sq.toString());

// change the width manuelly (which the Square class cannot prevented it as BAD behavior.)

sq.width = 10;
console.log(sq.toString());

// to change it , we could use getter / setter to limit the modification of the propertity

class RectangleGS {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(wv) {
    this._width = wv;
  }
  set height(hv) {
    this._height = hv;
  }

  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width} x ${this._height}`;
  }
}

class SquareGS extends RectangleGS {
  constructor(size) {
    super(size, size);
  }

  set width(wv) {
    this._width = this._height = wv;
  }
  set height(hv) {
    this._height = this._width = hv;
  }
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}

console.log("..........");
rc = new RectangleGS(2, 3);
console.log(rc.toString());
sq = new SquareGS(5);
console.log(sq.toString());
sq.height = 10;
console.log(sq.toString());

// this one break the LSP, since the Square setter will have a side effect (change one of width/height will change both)
let useIt = function (rc) {
  let width = rc.width;
  rc.height = 10;
  console.log(`Expected are of ${10 * width}, but got ${rc.area}`);
};

useIt(rc);
useIt(sq);

// One choice is to avoid to use inheritance with case like square vs rectangle
// square is only a special case of rectangle and it has no additional functionality compare to rectangle;
// which means the square is a included minor set of rectangle, we should use some extra function like
// isSquare() -> Boolean to verified such special case instead of creating a inheritance class for it.
