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
    this.init_momento = new Momento(balance);
  }

  deposit(amount) {
    this.balance += amount;
    return new Momento(this.balance);
  }

  restore(m = this.init_momento) {
    this.balance = m.balance;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

let ba = new BankAccount(100);
let m1 = ba.deposit(50);
let m2 = ba.deposit(25);
console.log(ba.toString());

ba.restore(m1);
console.log(ba.toString());
ba.restore();
console.log(ba.toString());
