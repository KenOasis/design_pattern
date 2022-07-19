class User {
  constructor(fullName) {
    // This will has a lot of duplications as user number increasing
    this.fullName = fullName;
  }
}

class User2 {
  constructor(fullName) {
    let getOrAdd = function (s) {
      let idx = User2.strings.indexOf(s);
      if (idx !== -1) {
        return idx;
      } else {
        User2.strings.push(s);
        return User2.strings.length - 1;
      }
    };
    this.names = fullName.split(" ").map(getOrAdd);
  }
}

User2.strings = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomString = function () {
  let result = [];
  for (let x = 0; x < 10; ++x) {
    result.push(String.fromCharCode(65 + getRandomInt(26)));
  }
  return result.join("");
};

let firstNames = [];
let lastNames = [];
let users = [];
let users2 = [];
for (let i = 0; i < 100; ++i) {
  firstNames.push(randomString());
  lastNames.push(randomString());
}

for (let first of firstNames) {
  for (let last of lastNames) {
    users.push(new User(`${first} ${last}`));
    users2.push(new User2(`${first} ${last}`));
  }
}

console.log(`10k users take up approx ${JSON.stringify(users).length} chars`);

let users2length = [users2, User2.strings]
  .map((x) => JSON.stringify(x).length)
  .reduce((x, y) => x + y);

console.log(`10k flyweight users take up approx ` + `${users2length} chars`);

// Sometimes its worth to caching the data, we store the index (address) of the caching data
// instead of the data itself => it may save a lot of memory
// it also need some extra computation to get/set data into memory, evaluate the tradeoff (space vs time)
// to see whether or not to use Flyweight pattern.
