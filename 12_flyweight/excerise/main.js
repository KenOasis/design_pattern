class WordRange {
  constructor(idx) {
    this.idx = idx;
    this.capitalize = false;
  }

  covers(idx) {
    return idx === this.idx;
  }
}

class Sentence {
  constructor(plainText) {
    this.plainText = plainText;
    this.formatting = [];
  }

  at(index) {
    let wr = new WordRange(index);
    this.formatting.push(wr);
    return wr;
  }

  toString() {
    let splitText = this.plainText.split(" ");
    for (let i = 0; i < splitText.length; ++i) {
      for (let wr of this.formatting) {
        if (wr.covers(i) && wr.capitalize) {
          splitText[i] = splitText[i].toUpperCase();
        }
      }
    }
    return splitText.join(" ");
  }
}

let s = new Sentence(`alpha beta gama`);
s.at(1).capitalize = true;
console.log(s.toString());
