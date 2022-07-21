class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposite ${amount}, balance is now ${this.balance}`);
    return true;
  }

  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdrawLimit) {
      this.balance -= amount;
      console.log(`Withdraw ${amount}, balance is now ${this.balance}`);
      return true;
    }
    console.log(
      `Can not withdraw more than ${this.balance - BankAccount.overdrawLimit}!`
    );
    return false;
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
    // we need to track wether the call method is succeeded or not, if it was succeeded, we can undo it.
    // if it is not succeeded called, we should not redo it.
    this.succeeded = false;
  }

  call() {
    switch (this.action) {
      case Action.deposit:
        this.succeeded = this.account.deposit(this.amount);
        break;
      case Action.withdraw:
        this.succeeded = this.account.withdraw(this.amount);
        break;
    }
  }

  undo() {
    if (!this.succeeded) return;
    switch (this.action) {
      case Action.deposit:
        this.account.withdraw(this.amount);
        break;
      case Action.withdraw:
        this.account.deposit(this.amount);
        break;
    }
  }
}

let ba = new BankAccount(100);
let cmd = new BankAccountCommand(ba, Action.deposit, 100);
cmd.call();
console.log(ba.toString());
let cmd2 = new BankAccountCommand(ba, Action.withdraw, 250);
cmd2.call();
console.log(ba.toString());
cmd2.undo();
console.log(ba.toString());
