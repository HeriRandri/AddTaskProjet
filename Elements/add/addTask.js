const { enregistreTask } = require("../../EnregistreTask/enregistrer.js");
const question = require("../add/question.js");
const addTask = async () => {
  let titre = await question("Titre: ");
  let des = await question("Description: ");
  let date = new Date().toString();
  let newTask = { titre, des, date };
  enregistreTask(newTask);
  console.log("Tache ajouter avec success");
};

module.exports = {
  addTask,
};
