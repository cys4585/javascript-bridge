const COMMAND = require("./Command");

const READ_MESSAGE = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVING_SPACE: `\n이동할 칸을 선택해주세요. (위: ${COMMAND.UP}, 아래: ${COMMAND.DOWN})\n`,
  RETRY_OR_NOT: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.RETRY}, 종료: ${COMMAND.QUIT})\n`,
});

module.exports = READ_MESSAGE;
