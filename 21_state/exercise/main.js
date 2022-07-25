class CombinationLock {
  constructor(combination) {
    this.combination = combination.join("");
    this.reset();
    this.current = "";
  }

  reset() {
    // reset lock state here
    this.status = "LOCKED";
  }

  enterDigit(digit) {
    this.current += parseInt(digit);
    let idx = this.combination.indexOf(this.current);
    if (idx === -1) {
      this.status = "ERROR";
    } else if (this.combination.length === this.current.length) {
      this.status = "OPEN";
    } else {
      this.status = this.current;
    }
  }
}
let cl = new CombinationLock([1, 2, 3, 4, 5]);
console.log(cl.status);
cl.enterDigit(1);
console.log(cl.status);
cl.enterDigit(2);
console.log(cl.status);
cl.enterDigit(1);
console.log(cl.status);
cl.enterDigit(4);
console.log(cl.status);
cl.enterDigit(5);
console.log(cl.status);
