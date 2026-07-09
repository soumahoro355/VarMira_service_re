const express = require("express");

const app = express();
app.use(express.json());

app.use("/publication", require("./resource/Post"));

app.listen(3000, () => {
console.log("Serveur lancé");
});