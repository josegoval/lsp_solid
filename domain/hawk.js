const Bird = require("./bird");

class Hawk extends Bird {
  tweet() {
    console.log("*** hawk noises ***");
  }
}

module.exports = Hawk;
