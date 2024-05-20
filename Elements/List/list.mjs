import { makeTask } from "../../EnregistreTask/enregistrer.mjs";

const list = () => {
  console.log("Liste de taches");
  let resutltat = [];
  let allTask = makeTask();
  allTask.forEach((task, index) => {
    resutltat.push(
      `${index + 1} Title: ${task.titre} Description: ${task.des} Date: ${
        task.date
      }`
    );
    console.log(
      `${index + 1} Title: ${task.titre} Description: ${task.des} Date: ${
        task.date
      }`
    );
    console.log("----------------------------------------------");
  });
  return resutltat;
};

export default list;
