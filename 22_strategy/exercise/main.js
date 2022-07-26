class Creature {
  constructor(attack, health) {
    this.attack = attack;
    this.health = health;
    this.alive = this.health > 0;
    this.id = Creature.count++;
  }
}

Creature.count = 0;

class Game {
  constructor(damageStrategy) {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature) {
    this.damageStrategy.damage(creature);
    return creature.alive;
  }
}

class DamageStrategy {
  damage(creature) {
    if (creature.health <= 0) {
      creature.alive = false;
    }
  }
}

// always do 1 point damage
class ConstantDamageStrategy extends DamageStrategy {
  damage(creature) {
    creature.health--;
    super.damage(creature);
  }
}

// if a creature being damage by this kind of trap before, it will take 1 more point damage compared to the last time
// (1 -> 2 -> 3)
// 1 creature spring on the trap individually
class GrowingDamageStrategy extends DamageStrategy {
  damage(creature) {
    if (GrowingDamageStrategy.impact[creature.id]) {
      let dmg = ++GrowingDamageStrategy.impact[creature.id];
      creature.health -= dmg;
    } else {
      creature.health--;
      GrowingDamageStrategy.impact[creature.id] = 1;
    }

    super.damage(creature);
  }
}
GrowingDamageStrategy.impact = {};

let game = new Game(new GrowingDamageStrategy());
let goblin = new Creature(2, 5);
let dragon = new Creature(5, 10);

game.springTrapOn(goblin);
game.springTrapOn(dragon);
game.springTrapOn(dragon);
console.log(goblin.health);
console.log(dragon.health);
game.damageStrategy = new ConstantDamageStrategy();
game.springTrapOn(goblin);
console.log(goblin.health);
game.springTrapOn(goblin);
console.log(goblin.health);
