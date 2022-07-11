class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  static get id() {
    let newId = this.idCount;
    this.idCount++;
    return newId;
  }
  createPerson(name) {
    // todo
    let id = PersonFactory.id;
    console.log(`${name} has the id#${id}`);
    return new Person(id, name);
  }
}

PersonFactory.idCount = 0;

let p = new PersonFactory().createPerson("John");
let p2 = new PersonFactory().createPerson("Jane");
console.log(p);
console.log(p2);
