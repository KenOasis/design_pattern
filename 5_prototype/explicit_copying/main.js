class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  toString() {
    return `${this.streetAddress}, ${this.city}, ${this.country}.`;
  }

  deepCopy() {
    return new Address(this.streetAddress, this.city, this.country);
  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  toString() {
    return `${this.name} live in ` + this.address.toString();
  }

  deepCopy() {
    return new Person(this.name, this.address.deepCopy());
  }
}

let john = new Person("John", new Address("123 Jackson st.", "London", "UK"));

// wrong way copy (passed by reference)
// let jane = john

// right way, make a deep copy function
let jane = john.deepCopy();
jane.name = "Jane";
jane.address = new Address("234 broadway st.", "London", "UK");
console.log(jane.toString());
console.log(john.toString());
