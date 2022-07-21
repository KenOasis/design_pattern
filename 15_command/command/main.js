class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposite ${amount}, balance is now ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdrawLimit) {
      this.balance -= amount;
      console.log(`Withdraw ${amount}, balance is now ${this.balance}`);
    }
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

BankAccount.overdrawLimit = -500;

let Action = Object.freeze({
  deposit: 1,
  withdraw: 2,
});

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
  }

  call() {
    switch (this.action) {
      case Action.deposit:
        this.account.deposit(this.amount);
        break;
      case Action.withdraw:
        this.account.withdraw(this.amount);
        break;
    }
  }
}

let ba = new BankAccount(100);
let cmd = new BankAccountCommand(ba, Action.deposit, 100);
cmd.call();
console.log(ba.toString());
let cmd2 = new BankAccountCommand(ba, Action.withdraw, 150);
cmd2.call();
console.log(ba.toString());
