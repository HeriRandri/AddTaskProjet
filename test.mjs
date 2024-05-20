import express from "express";
import fs from "fs";
import path from "path";
import { makeTask } from "./EnregistreTask/enregistrer.mjs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.get("/test.css", (req, res, next) => {
  const cssPath = path.join(__dirname, "/test.css");
  fs.readFile(cssPath, (err, data) => {
    if (err) {
      res.status(500).send();
      next();
    } else {
      res.set("Content-Type", "text/css");
      res.send(data.toString());
      next();
    }
  });
});

app.get("/", (req, res, next) => {
  fs.readFile("test.html", (err, data) => {
    if (err) {
      res.status(500).send();
      next();
    } else {
      res.send(data.toString());
      next();
    }
  });
});
app.post("/", (req, res) => {
  const recherche = req.body.recherche;
  console.log(recherche);
  let listALL = makeTask();
  let reqTask = listALL.filter((task) => {
    return (
      task.titre.toLowerCase().includes(recherche.toLowerCase()) ||
      task.description.toLowerCase().includes(recherche.toLowerCase()) ||
      task.date.toLowerCase().includes(recherche.toLowerCase())
    );
  });
  // if (reqTask.length > 0) {
  fs.readFile("test.html", "utf-8", (erreur, data) => {
    if (erreur) {
      console.error("Erreur de lecture du fichier HTML:", erreur);
      return res.status(500).send("Erreur de lecture du fichier HTML");
    }
    let tableCherche = "";
    reqTask.forEach((item) => {
      tableCherche += `<tr>
          <td>${item.titre}</td>
          <td>${item.description}</td>
          <td>${item.date}</td>`;
    });
    if (typeof data !== "string") {
      data = data.toString();
    }
    data = data.replace("<!-- recherche trouver? -->", tableCherche);
    res.setHeader("Content-type", "text/html");
    res.status(200).send(data);
  });
  // }
});

app.listen(3009, () => {
  console.log(`http://localhost:3009`);
});
