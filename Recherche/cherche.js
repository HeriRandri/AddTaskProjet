const readTask = require("../EnregistreTask/enregistrer");

const rehcerche = (taskChercher) => {
  return new Promise((resolve, reject) => {
    let loadingInterval = setInterval(() => {
      process.stdout.write(".");
    }, 500);
    process.stdout.write("Recherche en cours");
    setTimeout(() => {
      clearInterval(loadingInterval);
      let allTask = readTask.makeTask();
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
        });
        resolve();
      } else {
        reject(`\nTask inconnue ${reqTask}`);
      }
    }, 2000);
  });
};

module.exports = rehcerche;
