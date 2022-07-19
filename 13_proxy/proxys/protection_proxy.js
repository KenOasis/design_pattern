// A protection proxy is added to provided proctection or limitation to unprotected/senstive resource
class Car {
  drive() {
    console.log(`Car is being driving`);
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
    // here meaning not direct access to the car object
    this._car = new Car();
  }

  drive() {
    if (this.drive.age >= 16) {
      this._car.drive();
    } else {
      console.log(`Driver's too young`);
    }
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

let car = new Car();
car.drive();

let car2 = new CarProxy(new Driver(12));
car2.drive();
