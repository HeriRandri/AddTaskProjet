const express = require("express");
// const server = express();
// const port = 3000;
// server.get("/", (req, res) => {
//   res.send("Hello express 2 ");
// });
// server.get("/api/pokemo/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(`vous avez pokemo ${id}`);
// });

// server.listen(port, () =>
//   console.log(
//     `Notre application node est demareee sur: http://localhost:${port}`
//   )
// );

let e:number= 23

function fu(params:number) {
    console.log(params);
    
}
fu(e)

let tab = [3, 8, 9, 2];
let resutltat = tab.find(index=>index %2!==0)
console.log(resutltat);


