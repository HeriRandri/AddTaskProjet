import { Router } from "express";
import fs from "fs";

const mainHtml = Router();

mainHtml.get("", (req, res) => {
  fs.readFile("main.html", (err, data) => {
    if (err) {
      res.status(500).send("Erreur", err);
    } else {
      res.setHeader("Content-type", "text/html").send(data.toString());
    }
  });
});
export default mainHtml;
