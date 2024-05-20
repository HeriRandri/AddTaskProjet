import { Router } from "express";
import fs from "fs";
import { enregistreTask } from "../EnregistreTask/enregistrer.mjs";
const add_task = Router();

const path_add = "./Front/add.html";
const path_liste = "./Front/liste.html";

add_task.get("", (req, res) => {
  fs.readFile(path_add, "utf-8", (erreur, data) => {
    if (erreur) {
      res.status(500).send("Erreur de serveur");
    } else {
      res.status(200).send(data.toString());
    }
  });
});

add_task.post("", (req, res) => {
  /* methode fetch*/
  const new_task = req.body;
  enregistreTask(new_task);
  // fs.readFile(path_liste, (err, data) => {
  //   if (err) {
  //     res.status(500).send("Erreur de monter le formulaire");
  //   } else {
  //     res.status(200).send(data.toString());
  //   }
  // });

  res.redirect(path_liste);
});

// Methode Post dans le formule html
// add_task.post("", (req, res) => {
//   const titre = req.body.title;
//   const description = req.body.des;
//   const date = req.body["trip-start"];
//   const new_task = { titre, description, date };
//   enregistreTask(new_task);
//   fs.readFile(path_add, (err, data) => {
//     if (err) {
//       res.status(500).send("Erreur de monter le formulaire");
//     } else {
//       res.status(200).send(data.toString());
//     }
//   });
// });

export default add_task;
