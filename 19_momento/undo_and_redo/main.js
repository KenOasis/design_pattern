class Momento {
  // snapshot of BankAccount
  constructor(balance) {
    // Memento should be immutable
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.changes = [new Momento(balance)];
    this.current_state = 0;
  }

  deposit(amount) {
    this.balance += amount;
    let m = new Momento(this.balance);
    this.changes.push(m);
    this.current_state++;
    return m;
  }

  restore(m) {
    this.balance = m.balance;
    this.changes.push(m);
    this.current_state = this.changes.length - 1;
  }

  undo() {
    if (this.current_state > 0) {
      let m = this.changes[this.current_state - 1];
      this.balance = m.balance;
      this.current_state--;
    }
  }

  redo() {
    if (this.current_state < this.changes.length - 1) {
      let m = this.changes[this.current_state + 1];
      this.balance = m.balance;
      this.current_state++;
    }
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

let ba = new BankAccount(100);
let m1 = ba.deposit(50);
let m2 = ba.deposit(25);
console.log(ba.toString());

ba.undo();
console.log(ba.toString());
ba.undo();
console.log(ba.toString());
ba.redo();
console.log(ba.toString());
ba.redo();
console.log(ba.toString());
ba.redo();
console.log(ba.toString());
