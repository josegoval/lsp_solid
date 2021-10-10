const Bird = require("./bird");

class Blowfish extends Bird {
  tweet() {
    throw new Error("Fishes can't tweet!");
  }
}

module.exports = Blowfish;
