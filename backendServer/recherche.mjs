import { Router } from "express";
import { makeTask } from "../EnregistreTask/enregistrer.mjs";
import fs from "fs";

const recherche = Router();
const path_liste = "./Front/recherche.html";

recherche.get("", (req, res) => {
  const task_input = req.query.recherche;
  if (task_input) {
    const all_list = makeTask();
    const req_task = all_list.filter((item) => {
      return (
        item.titre.includes(task_input) ||
        item.description.includes(task_input) ||
        item.date.includes(task_input)
      );
    });
    if (req_task.length > 0) {
      fs.readFile(path_liste, "utf-8", (err, data) => {
        if (err) {
          console.error("erreur", err);
          res.status(500).send("Erreur de monter le liste");
        } else {
          let table_trouver = "";
          req_task.forEach((item) => {
            table_trouver += `<tr>
              <td>${item.titre}</td>
              <td>${item.description}</td>
              <td>${item.date}</td>`;
          });

          data = data.replace("<!-- recherche trouver -->", table_trouver);
          res
            .setHeader("Content-type", "text/html")
            .status(200)
            .send(data.toString());
        }
      });
    }
  } else {
    fs.readFile(path_liste, "utf-8", (err, data) => {
      if (err) {
        console.error("Erreur de monté html", err);
        res.status(500).send("Erreur");
      } else {
        res
          .setHeader("Content-type", "text/html")
          .status(200)
          .send(data.toString());
      }
    });
  }
});
export default recherche;
