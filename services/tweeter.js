const Bird = require("../domain/bird");

/**
 * Executes the bird's tweet method.
 * @param {Bird} bird Expect a Bird class
 */
function listenTweet(bird = new Bird()) {
  bird.tweet();
}

module.exports = { listenTweet };
