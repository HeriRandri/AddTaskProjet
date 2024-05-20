import fs from "fs";
import { makeTask } from "../EnregistreTask/enregistrer.mjs";
import { Router } from "express";
import path from "path";
import express from "express";

const listes = Router();

// listes.use(express.static(__dirname, "style"));
const list_path = "./Front/liste.html";
listes.get("", (req, res) => {
  const list = makeTask();
  const all_list = list.map((liste) => {
    return liste;
  });

  fs.readFile(list_path, "utf-8", (err, data) => {
    try {
      if (err) {
        throw err;
      }
      let tableContent = "";
      all_list.forEach((item) => {
        tableContent += `<tr>
                <td>${item.titre}</td>
                <td>${item.description}</td>
                <td>${item.date}</td>`;
      });
      if (typeof data !== "string") {
        data = data.toString();
      }
      data = data.replace("<!-- donne json inseré ici -->", tableContent);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send("Erreur");
    }
  });
});

export default listes;
