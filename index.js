const Hawk = require("./domain/hawk");
const Blowfish = require("./domain/blowfish");
const { listenTweet } = require("./services/tweeter");

const hawk = new Hawk();
const blowfish = new Blowfish();

// Legit LSP
listenTweet(hawk);
// Illegal LSP
listenTweet(blowfish);
