const http = require("http");
const fs = require("fs");
const { makeTask } = require("./EnregistreTask/enregistrer");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const listes = makeTask();
  const allList = listes.map((lists) => {
    return lists;
  });
  // res.end(JSON.stringify(allList));
  let path = "./Front/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;

    default:
      path += "404.html";
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      let tableContent = "";
      allList.forEach((item) => {
        tableContent += `<tr>
          <td>${item.titre}</td>
          <td>${item.des}</td>
          <td>${item.date}</td>
          </tr>
          `;
      });
      if (typeof data !== "string") {
        data = data.toString();
      }

      // Vérifiez si la chaîne à remplacer est correcte
      console.log("Data before replace:", data);

      data = data.replace(
        "<!-- Les données JSON seront insérées ici -->",
        tableContent
      );

      // Vérifiez si la substitution a eu lieu
      console.log("Data after replace:", data);
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Lasa zao http://localhost:3000");
});
