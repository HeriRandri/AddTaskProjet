import { stdin, stdout } from "process";
import readline from "node:readline";
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
const question = (question) => {
  return new Promise((res) => {
    rl.question(question, (answer) => {
      res(answer.trim());
    });
  });
};

export default question;
