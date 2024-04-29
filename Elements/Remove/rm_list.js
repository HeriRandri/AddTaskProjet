const { makeTask } = require("../../EnregistreTask/enregistrer");

exports.rm_list = (list_rm) => {
  const allTask = makeTask();
  const taskSuppr = allTask.find((task) => {
    return task.titre.toLowerCase().includes(list_rm.toLowerCase());
  });
  try {
    let task = taskSuppr.length > 0;
    return task.slice(1);
  } catch (error) {
    console.log(error);
  }
};
