// ISP: Interface Segregation Principle
// segregate (split up) interface
// people don't implement what they need
// interface should keep as less code as needed (don't make a huge interface)
// YAGNI - You Ain't Goint to Need It

// !!! Since js use duck typing so we dont have real interface (or similar) in js,
// it is simulating.
class Machine {
  constructor() {
    if (this.constructor.name === `Machine`) {
      throw new Error("Machine is abstract!");
    }
  }
  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {
    // implementation code
  }
  fax(doc) {
    // implementation code
  }
  scan(doc) {
    // implementation code
  }
}

class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not implemented!`;
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotImplementedError);
    }
  }
}

class OldFashionPrinter extends Machine {
  print(doc) {
    // ok
  }

  fax(doc) {
    // not working, leaving it blank (old printer cannot fax)
    // do nothing, principle of least suprise
  }

  scan(doc) {
    throw new NotImplementedError("OldFashionPrinter.scan");
  }
}

let printer = new OldFashionPrinter();
printer.scan("?");

// According ISP, we should have interface with what it really needed (not to much method we relly don't need)

class Printer {
  constructor() {
    if (this.constructor.name === `Printer`) {
      throw new Error("Printer is abstract!");
    }
  }
  print(doc) {}
}

// if the OldFashionPrinter implments Printer Interface, then we know that all the method of the inferface is available and which complied to ISP.
