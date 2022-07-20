class Creature {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name} (${this.attack} / ${this.defense})`;
  }
}

class CreatureModifier {
  constructor(creature) {
    this.creature = creature;
    this.next = null; // linked list
  }

  add(modifier) {
    if (this.next) {
      this.next.add(modifier);
    } else {
      this.next = modifier;
    }
  }

  handle() {
    if (this.next) {
      this.next.handle();
    }
  }
}

// this modifier act as the breaker of the modifier chain;
class NoBonusesModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log(`No bonuses for you!`);
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log(`Doubling ${this.creature.name}'s attack`);
    this.creature.attack *= 2;
    super.handle();
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature, value) {
    super(creature);
    this.value = value;
  }

  handle() {
    console.log(
      `Increasing ${this.creature.name}'s defense by ${this.value} points`
    );
    this.creature.defense += this.value;
    super.handle();
  }
}

let goblin = new Creature("Goblin", 1, 1);
console.log(goblin.toString());

let root = new CreatureModifier(goblin);

root.add(new DoubleAttackModifier(goblin));
root.add(new DoubleAttackModifier(goblin));
root.add(new NoBonusesModifier(goblin));
root.add(new IncreaseDefenseModifier(goblin, 2));

root.handle();
console.log(goblin.toString());
