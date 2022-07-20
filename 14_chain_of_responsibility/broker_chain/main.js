// Events object maintains handlers' map

class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  // add(subscribe) new handlers
  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  // remove(unscribe) handlers
  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  // trigger(fire) all the handlers
  fire(sender, args) {
    this.handlers.forEach(function (v) {
      v(sender, args);
    });
  }
}

// Enumeration of query type
let WhatToQuery = Object.freeze({
  attack: 1,
  defense: 2,
});

// query type represent the action type (whatToQuery)
// and the target (creatureName) and the arguments(value)
class Query {
  constructor(creatureName, whatToQuery, value) {
    this.creatureName = creatureName;
    this.whatToQuery = whatToQuery;
    this.value = value;
  }
}

// Game act as an event broker: which hold are the events(to be triggered)
class Game {
  constructor() {
    this.queries = new Event();
  }

  performQuery(sender, query) {
    this.queries.fire(sender, query);
  }
}

class Creature {
  constructor(game, name, attack, defense) {
    this.game = game;
    this.name = name;
    this.initial_attack = attack;
    this.initial_defense = defense;
  }

  get attack() {
    // defined the events: the type(query),
    let q = new Query(this.name, WhatToQuery.attack, this.initial_attack);
    this.game.performQuery(this, q);
    return q.value;
  }

  get defense() {
    let q = new Query(this.name, WhatToQuery.defense, this.initial_defense);
    this.game.performQuery(this, q);
    return q.value;
  }

  toString() {
    return `${this.name}: (${this.attack}/${this.defense})`;
  }
}

class CreatureModifier {
  constructor(game, creature) {
    this.game = game;
    this.creature = creature;
    this.token = game.queries.subscribe(this.handle.bind(this));
  }

  handle(sender, query) {
    // implement in inheritors
  }

  dispose() {
    game.queries.unsubscribe(this.token);
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(game, creature) {
    super(game, creature);
  }

  // defined the handle function: which is the action trigger when the event is triggered (fire) by the broker
  handle(sender, query) {
    if (
      query.creatureName === this.creature.name &&
      query.whatToQuery === WhatToQuery.attack
    ) {
      query.value *= 2;
    }
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(game, creature) {
    super(game, creature);
  }

  handle(sender, query) {
    if (
      query.creatureName === this.creature.name &&
      query.whatToQuery === WhatToQuery.defense
    ) {
      query.value += 2;
    }
  }
}

let game = new Game();
let goblin = new Creature(game, "Strong Goblin", 2, 2);
console.log(goblin.toString());

let dam = new DoubleAttackModifier(game, goblin);
console.log(goblin.toString());

let idm = new IncreaseDefenseModifier(game, goblin);
console.log(goblin.toString());
idm.dispose();

dam.dispose();
console.log(goblin.toString());
