class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  // 1) who fired the event?
  // 2) adiitional data (event args)
  fire(sender, args) {
    this.handlers.forEach((v, k) => v(sender, args));
  }
}

// arguments for the event Person.cattch(cold)
class FallsIllArgs {
  constructor(address) {
    this.address = address;
  }
}

class Person {
  constructor(address) {
    this.address = address;
    this.fallsIll = new Event();
  }

  catchCold() {
    this.fallsIll.fire(this, new FallsIllArgs(this.address));
  }
}

let p = new Person("888 Jackson st.");

// subscribe the fallsIll event and provide a handler (tell what the event should be handled if it was triggered)
let sub = p.fallsIll.subscribe((s, a) => {
  console.log(`A police has been called ` + `to ${a.address}`);
});

// when event happen, trigger the event hanlder
p.catchCold();
p.catchCold();

// unsucribe the event
p.fallsIll.unsubscribe(sub);
p.catchCold();
