class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // It breaks open-close principle, but it gives a benefits for user-friendly api
  static get factory() {
    return new PointFactory();
  }
}

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let p = Point.factory.newCartesianPoint(4, 5);
let p2 = Point.factory.newPolarPoint(5, Math.PI / 4);
