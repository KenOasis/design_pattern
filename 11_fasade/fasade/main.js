// this is only pseudocode

class Buffer extends Array {
  constructor(width = 30, height = 20) {
    super();
    this.width = width;
    this.height = height;
    this.alloc(width * height);
  }

  write(text, position = 0) {
    //
  }
}

// In the real world code, the complexity of the methods (append, getCharAt, ...) will be lots of higher depends
// on the implementation of the Buffer
// The api consumer will not care about the complexity but care about wether it works or not

class Viewport {
  constructor(buffer = new Buffer()) {
    this.buffer = buffer;
    this.offset = 0;
  }

  append(text, pos) {
    this.buffer.write(text, pos + this.offset);
  }

  getCharAt(index) {
    return this.buffer[this.offset + index];
  }
}

class Console {
  constructor() {
    this.buffer = new Buffer();
    this.currentViewport = new Viewport(this.buffer);
    this.buffers = [this.buffer];
    this.viewports = [this.currentViewport];
  }

  write(text) {
    this.currentViewport.buffer.write(text);
  }

  getCharAt(index) {
    return this.currentViewport.getCharAt(index);
  }
}

// The core idea of facade pattern is the interface should not care about the detail of implementation or the interplay of the subsystem. Just give an interface as simple as the consumer needed
