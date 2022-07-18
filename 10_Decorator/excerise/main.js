class Bird {
  constructor(age = 0) {
    this.age = age;
  }

  fly() {
    return this.age < 10 ? "flying" : "too old";
  }
}

class Lizard {
  constructor(age = 0) {
    this.age = age;
  }

  crawl() {
    return this.age > 1 ? "crawling" : "too young";
  }
}

class Dragon {
  constructor(animal, age = 0) {
    this.age = age;
    this.animal = animal;
  }

  fly() {
    if (typeof this.animal.fly === "function") {
      return this.animal.fly();
    }
    return new Bird(this.age).fly();
  }

  crawl() {
    if (typeof this.animal.crawl === "function") {
      return this.animal.crawl();
    }
    return new Lizard(this.age).crawl();
  }
}

let bird = new Bird(11);
let dragon = new Dragon(bird, 5);
console.log(dragon.fly());
console.log(dragon.crawl());
