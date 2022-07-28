class Game {
  constructor(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    this.currentPlayer = 0;
  }
  // template_method: only defined what need to be done without the concrete implementation
  run() {
    this.start();
    while (!this.haveWinner) {
      this.takeTurn();
    }
    console.log(`Player ${this.winningPlayer} wins.`);
  }

  // those method implemented at subclass
  start() {}
  get haveWinner() {}
  takeTurn() {}
  get winningPlayer() {}
}

class Chess extends Game {
  constructor() {
    super(2);
    this.maxTurns = 10;
    this.turn = 1;
  }

  start() {
    console.log(
      `Starting a game of chess ` + `with ${this.numberOfPlayers} plays.`
    );
  }
  get haveWinner() {
    return this.turn === this.maxTurns;
  }
  takeTurn() {
    console.log(
      `Turn ${this.turn++} taking by ` + ` player ${this.currentPlayer}.`
    );
    this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers;
  }
  get winningPlayer() {
    return this.currentPlayer;
  }
}

let chess = new Chess();
chess.run();
