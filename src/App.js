const BridgeGameController = require("./controller/BridgeGameController");

class App {
  game;

  play() {
    this.game = new BridgeGameController();
    this.game.gameStart();
  }
}

module.exports = App;

const app = new App();
app.play();
