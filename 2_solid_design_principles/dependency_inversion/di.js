// DIP: defined a relationship between low level module and high level module
// HIGH-LEVEL MODULE should not depend directly on LOW-LEVEL MODULE

let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW-LEVEL MODULE (defined relationship)

class Relationships {
  constructor() {
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }
}

// HIGH-LEVEL MODULE

class Research {
  constructor(relationships) {
    // find all children of John
    // low level dependency (if low-level module change (.data) then high-level module must change too )
    let relations = relationships.data;
    for (let rel of relations.filter(
      (r) => r.from.name === "John" && r.type === Relationship.parent
    )) {
      console.log(`John has a child named ${rel.to.name}`);
    }
  }
}

let parent = new Person("John");
let child1 = new Person("Chris");
let child2 = new Person("Matt");

// let rels = new Relationships();
// rels.addParentAndChild(parent, child1);
// rels.addParentAndChild(parent, child2);

// let research = new Research(rels);

class RelationshipBrowser {
  // abstract / interface (if other language has it)
  constructor() {
    if (this.constructor.name === `RelationshipBrowser`) {
      throw new Error("RelationshipBrowser is abstract!");
    }
  }

  findAllChildOf(name) {}
}

class RelationshipsID extends RelationshipBrowser {
  // we move low-level dependcy (findAllChildOf) from high-level to low-level(class implement the interface/abstract class which contains this dependency)
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }

  // dependecy now move to here
  findAllChildOf(name) {
    return this.data
      .filter((r) => r.from.name === name && r.type === Relationship.parent)
      .map((r) => r.to);
  }
}

// HIGH-LEVEL MODULE
class ResearchID {
  constructor(broweser) {
    for (let p of broweser.findAllChildOf(`John`)) {
      console.log(`John has a child called ${p.name}`);
    }
  }
}
// now High-level module will not depend on low-level module (the class which implement the inteface which contains the depedency)

let relID = new RelationshipsID();
relID.addParentAndChild(parent, child1);
relID.addParentAndChild(parent, child2);
let researchID = new ResearchID(relID);
