class Bridge {
  constructor(correctBridge) {
    this.correctBridge = correctBridge;
    this.tryBridge = [];
  }

  initTryBridge() {
    this.tryBridge = [];
  }

  move(movingSpace) {
    this.tryBridge.push(movingSpace);
  }

  getCorrectBridge() {
    return this.correctBridge;
  }

  getTryBridge() {
    return this.tryBridge;
  }
}

module.exports = Bridge;
