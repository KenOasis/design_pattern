class Singleton {
  constructor() {
    const instance = this.constructor.instance;

    // if it has already called and instantiated before, return the SAME instance initialized before
    if (instance) {
      return instance;
    }

    // if being called first time, just return itself (which just instantiated)
    this.constructor.instance = this;
  }

  foo() {
    console.log(`Doing something...`);
  }
}

let s1 = new Singleton();
let s2 = new Singleton();
console.log(`Are they the same instance?`, s1 === s2);
s1.foo();
