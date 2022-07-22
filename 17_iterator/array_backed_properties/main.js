class Creature {
  constructor() {
    // this.strength = this.agility = this.intelligence = 10;
    /** Using Array Back Properties */
    this.stats = new Array(3).fill(10);
  }

  get strength() {
    return this.stats[0];
  }
  set strength(value) {
    this.stats[0] = value;
  }

  get agility() {
    return this.stats[1];
  }
  set agility(value) {
    this.stats[1] = value;
  }

  get intelligence() {
    return this.stats[2];
  }
  set intelligence(value) {
    this.stats[2] = value;
  }

  get sumOfStats() {
    return this.stats.reduce((a, b) => a + b);
  }

  get averageStats() {
    return this.sumOfStats / this.stats.length;
  }

  get maxStats() {
    return Math.max(...this.stats);
  }

  /** Directly write these method is back chice if the
   *  num of attributes is incresing: You have to rewrite all the code
   * */
  // get sumOfStats() {
  //   return this.strength + this.agility + this.intelligence;
  // }

  // get averageStats() {
  //   return this.sumOfStats / 3.0;
  // }

  // get maxStats() {
  //   return Math.max(this.strength, this.agility, this.intelligence);
  // }

  statsToString() {
    return (
      `Creature has average stats ${this.averageStats}, ` +
      `max stats = ${this.maxStats}, ` +
      `sum of stats = ${this.sumOfStats}`
    );
  }
}

let creature = new Creature();
creature.strength = 10;
creature.agility = 11;
creature.intelligence = 15;
console.log(creature.statsToString());
