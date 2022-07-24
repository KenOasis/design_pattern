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

class PropertyChangedArgs {
  constructor(name, newValue) {
    this.name = name;
    this.newValue = newValue;
  }
}

class Person {
  constructor(age) {
    this._age = age;
    this.propertyChanged = new Event();
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (!value || this._age === value) {
      return;
    }
    this._age = value;
    this.propertyChanged.fire(this, new PropertyChangedArgs("age", value));
  }
}

class RegistrationChecker {
  constructor(person) {
    this.person = person;
    // passing closure with the this ref must to clarify (bind) to tell the closure which this is.
    this.token = person.propertyChanged.subscribe(this.age_changed.bind(this));
  }

  age_changed(sender, args) {
    if (sender === this.person && args.name === "age") {
      if (args.newValue < 13) {
        console.log(`Sorry, you are still too young.`);
      } else {
        console.log("Okay, you can register");
        sender.propertyChanged.unsubscribe(this.token);
      }
    }
  }
}

let p = new Person(15);
let checker = new RegistrationChecker(p);
p.age = 15;
p.age = 12;
p.age = 16;
p.age = 11;
