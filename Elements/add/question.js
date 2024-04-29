const { stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const question = (question) => {
  return new Promise((res) => {
    rl.question(question, (answer) => {
      res(answer);
    });
  });
};

module.exports = question;
