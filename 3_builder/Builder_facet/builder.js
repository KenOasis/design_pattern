class Person {
  constructor() {
    // address
    this.streetAddress = this.postcode = this.city = "";

    // employement
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }

  toString() {
    return (
      `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
      `and works at ${this.companyName} as a ${this.position} earning $${this.annualIncome}`
    );
  }
}

// we have two specific builders for building the address info or building the employement info

// Buidler - facets function
class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  // builder create the single object from the base class then pass it to the child class
  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

let pb = new PersonBuilder();
let person = pb.lives
  .at("866 Jackson St.")
  .in("San Francisco")
  .withPostcode("94133")
  .works.at("Google Inc.")
  .asA("Engineer")
  .earning("0")
  .build();

console.log(person.toString());