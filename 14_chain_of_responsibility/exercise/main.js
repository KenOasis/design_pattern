class Goblin {
  constructor(game, baseAttack = 1, baseDefense = 1) {
    this.game = game;
    this.baseAttack = baseAttack;
    this.baseDefense = baseDefense;
    this.game.goblins++;
  }

  get attack() {
    return this.baseAttack + this.game.goblinKings;
  }

  get defense() {
    return this.baseDefense + this.game.goblins - 1;
  }

  toString() {
    return `Attack: ${this.attack} / Defense: ${this.defense}`;
  }
}

class GoblinKing extends Goblin {
  constructor(game) {
    super(game, 3, 3);
    this.game.goblinKings++;
  }

  get attack() {
    return this.baseAttack + this.game.goblinKings - 1;
  }
}

class Game {
  constructor() {
    this.goblins = 0;
    this.goblinKings = 0;
  }
}

let game = new Game();
let goblin1 = new Goblin(game);
let goblin2 = new Goblin(game);
let goblinKing1 = new GoblinKing(game);
let goblinKing2 = new GoblinKing(game);

console.log(goblin1.toString());
console.log(goblin2.toString());
console.log(goblinKing1.toString());
console.log(goblinKing2.toString());
