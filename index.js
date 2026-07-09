const express = require("express");

const app = express();
app.use(express.json());

app.use("/publication", require("./resource/Post"));

// Route d'accueil
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Serveur Node.js</title>
            <style>
                body{
                    font-family: Arial, sans-serif;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    background:#f5f5f5;
                }
                .card{
                    background:white;
                    padding:30px;
                    border-radius:10px;
                    box-shadow:0 2px 10px rgba(0,0,0,.1);
                    text-align:center;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>✅ Serveur opérationnel</h1>
                <p>L'API fonctionne correctement.</p>
                <p>Endpoint disponible : <b>/publication</b></p>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});