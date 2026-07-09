const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

app.use(express.json());

console.log("SERVER STARTED");

app.get("/", (req, res) => {
    console.log("ROOT OK");

    res.json({
        message: "API fonctionne"
    });
});

app.use("/publication", require("./resource/Post"));

app.listen(3000, () => {
    console.log("Serveur lancé");
});