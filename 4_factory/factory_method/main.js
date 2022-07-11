CoordinateSystem = {
  cartesian: 0,
  poloar: 1,
};

class Point {
  // not working in JS becasue of lack of overload
  // constructor(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }
  // constructor(rho, theta) {
  //   this.x = rho * Math.cos(theta)
  //   this.y = rho * Math.sin(theta)
  // }
  // Still not a good design: violate open-close principle
  // constructor(a, b, cs = CoordinateSystem.cartesian) {
  //   switch (cs) {
  //     case CoordinateSystem.cartesian:
  //       this.x = a;
  //       this.y = b;
  //       break;
  //     case CoordinateSystem.poloar:
  //       this.x = a * Math.cos(b);
  //       this.y = b * Math.sin(b);
  //       break;
  //   }
  // }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Factory methods

  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let p = Point.newCartesianPoint(4, 5);
console.log(p);
let p2 = Point.newPolarPoint(5, Math.PI / 2);
console.log(p2);
