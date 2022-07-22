class Stuff {
  constructor() {
    this.a = 11;
    this.b = 22;
  }

  [Symbol.iterator]() {
    let i = 0;
    let self = this;
    return {
      next: function () {
        return {
          done: i > 1, // when the iterator done
          value: self[i++ === 0 ? "a" : "b"], // way to determine current variable
        };
      },
    };
  }

  get backward() {
    let i = 0;
    let self = this;
    return {
      next: function () {
        return {
          done: i > 1, // when the iterator done
          value: self[i++ === 0 ? "b" : "a"],
        };
      },
      [Symbol.iterator]: function () {
        return this; // this this is bind to the next function of the return
      },
    };
  }
}
let stuff = new Stuff();
for (let e of stuff.backward) {
  console.log(e);
}
