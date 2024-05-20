import { makeTask } from "../EnregistreTask/enregistrer.mjs";

const rehcerche = (taskChercher) => {
  return new Promise((resolve, reject) => {
    let resultat = [];
    let loadingInterval = setInterval(() => {
      process.stdout.write(".");
    }, 500);
    process.stdout.write("Recherche en cours");
    setTimeout(() => {
      clearInterval(loadingInterval);
      let allTask = makeTask();
      let reqTask = allTask.filter((task) => {
        return (
          task.titre.toLowerCase().includes(taskChercher.toLowerCase()) ||
          task.des.toLowerCase().includes(taskChercher.toLowerCase()) ||
          task.date.includes(taskChercher.toLowerCase())
        );
      });

      if (reqTask.length > 0) {
        reqTask.forEach((task, index) => {
          console.log(
            ` \n ${index + 1} TItle: ${task.titre} Description: ${
              task.des
            } Date: ${task.date}`
          );
          resultat.push(
            ` \n ${index + 1} TItle: ${task.titre} Description: ${
              task.des
            } Date: ${task.date}`
          );
        });
        resolve(resultat);
      } else {
        reject(`\nTask inconnue ${reqTask}`);
      }
    }, 2000);
  });
};

export default rehcerche;
