let Action = Object.freeze({
  deposit: 0,
  withdraw: 1,
});

class Command {
  constructor(action, amount) {
    this.action = action;
    this.amount = amount;
    this.success = false;
  }
}

class Account {
  constructor() {
    this.balance = 0;
  }

  process(cmd) {
    switch (cmd.action) {
      case Action.deposit:
        this.balance += cmd.amount;
        cmd.success = true;
        break;
      case Action.withdraw:
        if (this.balance > cmd.amount) {
          this.balance -= cmd.amount;
          cmd.success = true;
        } else {
          cmd.success = false;
        }
        break;
    }
  }
}

let account = new Account();
let cmd1 = new Command(Action.deposit, 100);
let cmd2 = new Command(Action.withdraw, 50);
let cmd3 = new Command(Action.withdraw, 150);
account.process(cmd1);
console.log(account.balance, cmd1.success);
account.process(cmd2);
console.log(account.balance, cmd2.success);
account.process(cmd3);
console.log(account.balance, cmd3.success);
