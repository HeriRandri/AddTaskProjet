import { enregistreTask } from "../../EnregistreTask/enregistrer.mjs";
import question from "./question.mjs";
const addTask = async () => {
  let titre = await question("Titre: ");
  let description = await question("Description: ");
  let date = new Date().toString();
  let newTask = { titre, description, date };
  enregistreTask(newTask);
  console.log("Tache ajouter avec success");
};

export default addTask;
