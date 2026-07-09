const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/publication", require("./resource/Post"));

app.listen(3000, () => {
    console.log("Serveur lancé");
});