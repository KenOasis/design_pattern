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

  fire(sender, args) {
    this.handlers.forEach(function (v, k) {
      v(sender, args);
    });
  }
}

// A call senter will dipatch people as neede

class CallSenter {
  constructor() {
    this.standyBy = new Event();
    this.units = [];
  }
  ready(p) {
    this.units.push(p);
    let token = this.standyBy.subscribe(p.handler.bind(p));
    return token;
  }

  dispatch() {
    let p = this.units.pop();
    this.standyBy.fire(p, null);
    this.standyBy.unsubscribe(p.token);
  }
}

class Unit {
  constructor(name) {
    this.name = name;
    this.token = null;
  }
  handler(sender, args) {
    if (sender.name !== this.name) {
      console.log(`[${this.name} recieved]${sender.name} is dispatched`);
    }
  }
}

let callCenter = new CallSenter();
let john = new Unit("John");
let jane = new Unit("Jane");
let james = new Unit("James");
john.token = callCenter.ready(john);
jane.token = callCenter.ready(jane);
james.token = callCenter.ready(james);

callCenter.dispatch();
callCenter.dispatch();
