class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  toString() {
    return `${this.streetAddress}, ${this.city}, ${this.country}.`;
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

  greet() {
    console.log(
      `Hi, my name is ${this.name}, I live at ${this.address.toString()}`
    );
  }
}

// serializer object to handler deepcopy
class Serializer {
  constructor(types) {
    this.types = types;
  }

  markRecuisive(object) {
    let idx = this.types.findIndex((t) => {
      return t.name === object.constructor.name;
    });

    if (idx !== -1) {
      object["typeIndex"] = idx;

      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          this.markRecuisive(object[key]);
        }
      }
    }
  }

  reconstructRecursive(object) {
    if (object.hasOwnProperty("typeIndex")) {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (const key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }
      delete obj.typeIndex;
      return obj;
    }
    return object;
  }

  clone(object) {
    this.markRecuisive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}
let john = new Person("John", new Address("123 Jackson st.", "London", "UK"));

// serializatio nonly work with properties but not function
// let jane = JSON.parse(JSON.stringify(john));

// use Serializer class

let s = new Serializer([Person, Address]);
let jane = s.clone(john);

jane.name = "Jane";
jane.address = new Address("234 broadway st.", "London", "UK");

// will not work if use JSON directly
console.log(jane.toString());

console.log(john.toString());

// will not work if use JSON directly
jane.greet();

john.greet();
