const COMMAND = require("../constant/Command");
const ERROR_MESSAGE = require("../constant/ErrorMessage");

const isNotNumber = (num) => {
  const check = /^[0-9]+$/;
  return !check.test(num);
};

const isOverRange = (from, to, size) => {
  return size < from || to < size;
};

const Validator = {
  checkBridgeSize(size) {
    if (isNotNumber(size) || isOverRange(3, 20, size))
      throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
  },

  checkMovingSpace(movingSpace) {
    if (movingSpace !== COMMAND.UP && movingSpace !== COMMAND.DOWN)
      throw new Error(ERROR_MESSAGE.MOVING_SPACE);
  },
};

module.exports = Validator;
