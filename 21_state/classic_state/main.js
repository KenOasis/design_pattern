class Switch {
  constructor() {
    this.state = new OffState();
  }

  on() {
    this.state.on(this);
  }

  off() {
    this.state.off(this);
  }
}

class State {
  constructor() {
    if (this.constructor === State) {
      throw new Error("This is an abstract class");
    }
  }

  // check the child class to see why we do this
  // It represented that the current state is not changed if this method is being called (which the child class is not overriding this one)
  on(sw) {
    console.log(`Light is already on`);
  }
  off(sw) {
    console.log(`Light is already off`);
  }
}

class OnState extends State {
  constructor() {
    super();
    console.log(`Light turned on.`);
  }

  off(sw) {
    console.log(`Turning light off...`);
    sw.state = new OffState();
  }

  // we don't override the on() method here
  // so when it call on() on OnState object,
  // it will call the super.on() method which
  // will indicate that the light is already on
}

class OffState extends State {
  constructor() {
    super();
    console.log(`Light turned off.`);
  }

  on(sw) {
    console.log(`Turning light on...`);
    sw.state = new OnState();
  }
}

let sw = new Switch();
sw.on();
sw.off();
sw.off();
