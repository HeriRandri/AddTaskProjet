const list = require("./Elements/List/list");
const { addTask: add } = require("./Elements/add/addTask");
const rehcerche = require("./Recherche/cherche");
const question = require("./Elements/add/question");
const listGroup = require("./Elements/List/listGroup");
const { rm_list } = require("./Elements/Remove/rm_list");

const askCmmande = async () => {
  let answers = await question(
    "Que voulez vous faire (add, list, recherche or supprimer)"
  );
  if (answers.toLowerCase() === "add") {
    await add();
    askCmmande();
  } else if (answers.toLowerCase() === "list") {
    list();
    askCmmande();
  } else if (answers.toLowerCase() === "listGroup") {
    listGroup();
    askCmmande();
  } else if (answers.toLowerCase() === "recherche") {
    try {
      let cherche = await question("Recherche votre tache: ");
      await rehcerche(cherche);
      askCmmande();
    } catch (erreur) {
      console.log(erreur);
      askCmmande();
    }
  } else if (answers === "suppr") {
    let supp = await question("Entre le task supprimer");
    rm_list(supp);
    askCmmande();
  } else {
    askCmmande();
  }
};

askCmmande();
module.exports = askCmmande;
