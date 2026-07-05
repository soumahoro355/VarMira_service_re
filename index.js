const express = require("express");

const app = express();

app.use(express.json());

// Route principale
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 Mon backend Railway fonctionne !"
    });
});

// Test GET
app.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Route GET OK"
    });
});

// Test POST
app.post("/test", (req, res) => {
    console.log("Données reçues :", req.body);

    res.json({
        success: true,
        received: req.body
    });
});

// Test DELETE
app.delete("/test", (req, res) => {
    res.json({
        success: true,
        message: "Suppression simulée"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});