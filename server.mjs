import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import path from "path";
import listes from "./backendServer/listes.mjs";
import add_task from "./backendServer/add.mjs";
import recherche from "./backendServer/recherche.mjs";
import mongoose from "mongoose";
// import { config as configDotenv } from "dotenv";
// configDotenv();
import session from "express-session";
import mainHtml from "./backendServer/mainHtml.mjs";
import { DB_URL } from "./backendServer/mongoose.mjs";

mongoose.connect(DB_URL);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDb");
});

const server = express();
const port = process.env.PORT || 8002;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, "/Front/src/style")));
server.use(express.static(path.join(__dirname, "/Front/src/script")));
server.use(
  express.static(path.join(__dirname, "/Front/src/style/bootstrap/dist/css"))
);
server.use(
  express.static(path.join(__dirname, "/Front/src/style/bootstrap/dist/js"))
);
server.set("view engine", "ejs");

server.use("/", mainHtml);

// liste all task
server.use("/listes", listes);
// lire le fichier add.html
server.use("/add", add_task);

server.use("/recherche", recherche);

server.listen(port, () => {
  console.log("serveur bien demarrer http://localhost:8002");
});
