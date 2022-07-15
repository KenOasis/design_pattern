// For every string, it gave you a unique 32-bit integer and if a string changes, you're going to have a different integer representing
String.prototype.hashCode = function () {
  if (Array.prototype.reduce) {
    return this.split("").reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
  let hash = 0;
  if (this.length === 0) {
    return hash;
  }
  for (let i = 0; i < this.length; ++i) {
    const character = this.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `${this.x}, ${this.y}`;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  toString() {
    return `${this.start.toString()} -> ${this.end.toString()}`;
  }
}

class Vector extends Array {}

class VecotrRectangle extends Vector {
  constructor(x, y, width, height) {
    super();
    this.push(new Line(new Point(x, y), new Point(x + width, y)));
    this.push(
      new Line(new Point(x + width, y), new Point(x + width, y + height))
    );
    this.push(new Line(new Point(x, y), new Point(x, y + height)));
    this.push(
      new Line(new Point(x, y + height), new Point(x + width, y + height))
    );
  }
}

// have to work with this API
let drawPoint = function (point) {
  process.stdout.write(".");
};

class LineToPointAdapter extends Array {
  // add cache ===> for every line already in cache, we don't create it again
  // we use a hashcode -> line map to mapped the line into a unqiue hashcode (integer)
  constructor(line) {
    super();

    this.hash = JSON.stringify(line).hashCode();

    if (LineToPointAdapter.cache[this.hash]) {
      return;
    }

    this.points = [];

    console.log(
      `${LineToPointAdapter.count++}: Generating ` +
        `point for line ${line.toString()} (no caching)`
    );

    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    if (right - left === 0) {
      for (let y = top; y <= bottom; ++y) {
        this.points.push(new Point(left, y));
      }
    } else if (line.end.y - line.start.y === 0) {
      for (let x = left; x <= right; ++x) {
        this.points.push(new Point(x, top));
      }
    }
    LineToPointAdapter.cache[this.hash] = this.points;
  }

  get items() {
    return LineToPointAdapter.cache[this.hash];
  }
}
LineToPointAdapter.count = 0;
LineToPointAdapter.cache = {};
let vectors = [
  new VecotrRectangle(1, 1, 10, 10),
  new VecotrRectangle(3, 3, 6, 6),
];

let drawPoints = function () {
  for (let v of vectors) {
    for (let line of v) {
      let adapter = new LineToPointAdapter(line);
      console.log();
      adapter.items.forEach(drawPoint);
      console.log();
    }
  }
};

drawPoints();
// draw those rectange again
drawPoints();
