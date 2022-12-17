const Validator = require("../util/Validator");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const Bridge = require("../model/Bridge");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../util/BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGameController {
  bridge;

  tryCount = 0;

  gameStart() {
    OutputView.printStart();
    this.readBridgeSizePhase();
  }

  readBridgeSizePhase() {
    InputView.readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadBridgeSize(size) {
    try {
      Validator.checkBridgeSize(size);
      this.createBridge(size);
      this.gameTry();
    } catch (error) {
      OutputView.printError(error.message);
      this.readBridgeSizePhase();
    }
  }

  createBridge(size) {
    this.bridge = new Bridge(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate),
    );
    console.log(this.bridge.getCorrectBridge(0));
  }

  gameTry() {
    this.tryCount += 1;
    this.bridge.initTryBridge();
    this.readMovingPhase();
  }

  readMovingPhase() {
    InputView.readMoving(this.onReadMoving.bind(this));
  }

  onReadMoving(movingSpace) {
    try {
      Validator.checkMovingSpace(movingSpace);
      this.move(movingSpace);
    } catch (error) {
      OutputView.printError(error.message);
      this.readMovingPhase();
    }
  }

  move(movingSpace) {
    this.bridge.move(movingSpace);
    console.log(this.bridge.getTryBridge());
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGameController;
