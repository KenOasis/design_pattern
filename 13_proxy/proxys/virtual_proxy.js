// to mimic a resource that is exist
// not initilization, not performing any work until the point where the work is actually required
class Image {
  constructor(url) {
    this.url = url;
    console.log(`Loading image from ${url}`);
  }

  draw() {
    console.log(`Drawing image from ${this.url}`);
  }
}

class LazyImage {
  constructor(url) {
    this.url = url;
  }

  draw() {
    if (!this.image) {
      this.image = new Image(this.url);
    }
    this.image.draw();
  }
}

function drawImage(img) {
  console.log(`About to draw the image`);
  img.draw();
  console.log(`Done drawing the image`);
}

let url = `http://pokemon.com/pikachu.jpg`;
let img1 = new Image(url);

// the Image is loading no matter wether you draw it or not (call draw() method)
// drawImage(img1);

let img2 = new LazyImage(url);
// now the Image is loading only if you draw it (call draw() method)
// drawImage(img2)
