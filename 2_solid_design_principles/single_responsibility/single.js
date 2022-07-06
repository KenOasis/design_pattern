// Single Responsibility Principle
// a class should have only one primary responsibility only.

import fs from "fs";

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }
  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
  // save(filename) {
  //   fs.writeFileSync(filename, this.toString());
  // }

  // load(filename) {
  //   //
  // }

  // loadFromUrl(url) {
  //   //
  // }
}

// instead of handling as method of the class we could
// singled those persistance action out and group then into seperate action classes (Single Responsibility)
// so the class (Journal) will not be a GOD object (with lots of responsibilities as spaghetti code)
// once you have modfied such functionality, you do not have to modified all the objects but only the corresponded
// action class

// ### One responsibility, One class

// this class is only for persistance
class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

Journal.count = 0;

let j = new Journal();
j.addEntry(`I walked today.`);
j.addEntry(`I am tired today.`);
// j.save("temp.txt");
console.log(j.toString());

let p = new PersistenceManager();
let filename = "temp2.txt";
p.saveToFile(j, filename);

// separation of concerns
// You could break an algorithm in to serval concerns (preprocessing, postprocessing, or any other functionality which could be singled it out), and make it easy to maintain.
