const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "taskStocker.json");
const enregistreTask = (task) => {
  let taskStocker = [];
  if (fs.existsSync(filePath)) {
    taskStocker = JSON.parse(fs.readFileSync(filePath));
  }
  task.id = taskStocker.length + 1;
  taskStocker.push(task);
  fs.writeFileSync(filePath, JSON.stringify(taskStocker, null, 2));
};

const makeTask = () => {
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath));
  } else {
    return [];
  }
};

module.exports = { enregistreTask, filePath, makeTask };
