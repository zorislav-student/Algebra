import generateName from "sillyname";
import randomColor from "randomcolor";

function getMember() {
  return {
    username: generateName(),
    color: randomColor(),
  };
}

const exportDefault = {
  get: getMember,
};

export default exportDefault;
