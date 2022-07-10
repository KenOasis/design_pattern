class CodeBuilder {
  static get indention() {
    return 2;
  }
  constructor(className) {
    this.className = className;
    this.fields = [];
  }

  addField(filedName) {
    this.fields.push(filedName);
    return this;
  }

  toString() {
    let strs = [];
    strs.push(`class ${this.className} {\n`);
    if (this.fields.length > 0) {
      strs.push(
        " ".repeat(CodeBuilder.indention * 1) +
          `constructor(` +
          this.fields.join(", ") +
          ") {\n"
      );
      for (const field of this.fields) {
        strs.push(
          " ".repeat(CodeBuilder.indention * 2) + `this.${field} = ${field};\n`
        );
      }
      strs.push(" ".repeat(CodeBuilder.indention) + "}\n");
    }
    strs.push("}\n");
    return strs.join("");
  }
}

let cb = new CodeBuilder("Foo");
cb.addField("name").addField("age");
console.log(cb.toString());
