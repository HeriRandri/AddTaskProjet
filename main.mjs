import list from "./Elements/List/list.mjs";
import addTask from "./Elements/add/addTask.mjs";
import question from "./Elements/add/question.mjs";
import rehcerche from "./Recherche/cherche.mjs";

const askCmmande = async () => {
  let answers = await question("Que voulez vous faire (add, list, recherche )");
  if (answers.toLowerCase() === "add") {
    await addTask();
    askCmmande();
  } else if (answers.toLowerCase() === "list") {
    list();
    askCmmande;
  } else if (answers.toLowerCase() === "recherche") {
    try {
      let cherche = await question("Recherche votre tache: ");
      await rehcerche(cherche);
      askCmmande();
    } catch (erreur) {
      console.log(erreur);
      askCmmande();
    }
  }
  askCmmande();
};
askCmmande();
