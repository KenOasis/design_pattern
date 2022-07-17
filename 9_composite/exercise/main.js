class SingleValue {
  constructor(value) {
    this.values = [value];
  }
}

class ManyValues {
  constructor() {
    this.values = [];
  }

  push(value) {
    this.values.push(value);
  }
}

let sum = function (containers) {
  let values = [];
  for (const container of containers) {
    values.push(...container.values);
  }
  return values.reduce((p, c) => p + c, 0);
};

let singleValue = new SingleValue(11);
let otherValues = new ManyValues();
otherValues.push(22);
otherValues.push(33);

console.log(sum([singleValue, otherValues]));
