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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});