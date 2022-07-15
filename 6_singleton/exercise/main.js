class SingletonTester {
  static isSingleton(generator) {
    let s1 = new generator();
    let s2 = new generator();
    return s1 === s2;
  }
}

// test

class SingletonGenerator {
  constructor() {
    let instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
}

class NonSingletonGenerator {
  // nothing but just regular class
}

console.log(SingletonTester.isSingleton(SingletonGenerator));
console.log(SingletonTester.isSingleton(NonSingletonGenerator));
