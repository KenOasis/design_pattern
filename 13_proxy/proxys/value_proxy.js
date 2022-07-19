// You may need value proxy when the Number not behavior like a regular number

class Percentage {
  constructor(percent) {
    this.percent = percent;
  }

  toString() {
    return `${this.percent}%`;
  }

  // Provided the value for calculation
  valueOf() {
    return this.percent / 100;
  }
}

let fivePercent = new Percentage(5);
console.log(fivePercent.toString());
console.log(`5% of 50 os ${50 * fivePercent}`);
