const COMMAND = require("./Command");

const ERROR = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  BRIDGE_SIZE: `${ERROR} 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  MOVING_SPACE: `${ERROR} 이동할 칸은 (위: ${COMMAND.UP}, 아래: ${COMMAND.DOWN})만 선택할 수 있습니다.`,
});

module.exports = ERROR_MESSAGE;
