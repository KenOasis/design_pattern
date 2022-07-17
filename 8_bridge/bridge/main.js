class Renderer {
  renderCircle(radius) {}
}

class VectorRenderer extends renderer {
  renderCircle(radius) {
    console.log(`Drawing a circle of radius of ${radius}`);
  }
}

class RasterRenderer {
  renderCircle(radius) {
    console.log(`Drawing pixels for a circle of radius of ${radius}`);
  }
}

// Build bridge inside one Hirarechy

class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }

  draw() {}
}

class Circle extends Shape {
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }

  draw() {
    this.renderer.renderCircle(this.radius);
  }

  resize(factor) {
    this.radius *= factor;
  }
}

class Square {}

// Hierarchy: Shape -> Square, Circle, Triange, ...
// Hierarchy: Render -> Raster, Vector, ....

let raster = new RasterRenderer();
let vector = new VectorRenderer();
let circle = new Circle(vector, 5);

// let circle = new Circle(raster, 5);

circle.draw();
circle.resize(2);
circle.draw();
