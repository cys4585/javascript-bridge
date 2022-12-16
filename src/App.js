const BridgeGame = require("./controller/BridgeGame");

class App {
  play() {
    new BridgeGame().gameStart();
  }
}

module.exports = App;

const app = new App();
app.play();
