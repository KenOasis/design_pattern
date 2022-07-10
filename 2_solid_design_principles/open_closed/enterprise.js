// (Open-Cloed Principle) => Open for extension (inheritance), closed for modification (modified a defined class)

let Color = Object.freeze({
  red: "red",
  green: "green",
  blue: "blue",
});

let Size = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }

  //Here is the modification (Not a good choice)
  // filterBySize(products, size) {
  //   return products.filter((p) => p.size === size);
  // }

  // then requirement changed to both size and color

  filterByColorAndSize(products, color, size) {
    return products.filter((p) => p.size === size && p.color === color);
  }

  // as the requirement getting more and more (which is normal in the real world)......
  // it will cause "state space explosion"
  // like (filter by a, filter by b, filter by a or b, filter by a and b...)
  //
}

// specification ("abstract" class / interface) (just a mimic but not strict abstract)
class Specification {
  constructor() {
    if (constructor.name === "Specification")
      throw new Error("Specificaiton is abstract!");
  }

  isSatisfied(item) {}
}
// color specification
class ColorSpecification extends Specification {
  constructor(color) {
    super();
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

// size specification
class SizeSpecification extends Specification {
  constructor(size) {
    super();
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

// combinator "And" for specification

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

// combinator "Or" for specification

class OrSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.some((x) => x.isSatisfied(item));
  }
}

let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);

let products = [apple, tree, house];
let pf = new ProductFilter();
console.log(`Gree products (old:)`);
for (let p of pf.filterByColor(products, Color.green)) {
  console.log(` * ${p.name} is green.`);
}

class BetterFilter {
  // spec is a class but working like a (function) closure with name
  filter(items, spec) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}

let bf = new BetterFilter();
console.log(`Green products (new):`);
let colorSpec = new ColorSpecification(Color.green);
for (let p of bf.filter(products, colorSpec)) {
  console.log(` * ${p.name} is green.`);
}

console.log(`Large and green products:`);
let sizeSpec = new SizeSpecification(Size.large);
let andSpec = new AndSpecification(colorSpec, sizeSpec);
for (let p of bf.filter(products, andSpec)) {
  console.log(` * ${p.name} is green and large`);
}

console.log(`Large or green products:`);
let orSpec = new OrSpecification(colorSpec, sizeSpec);
for (let p of bf.filter(products, orSpec)) {
  console.log(` * ${p.name} is green or large`);
}

// The Open Closed Princinple means that you dont modfied the well tested existing code (unless it has BUG),
// but to use inheritance or use another way (specification/interface/protocol) to extend functionality

// benefits:
//  do not need to modified the production code which already tested
