const express = require('express');
const app = express();
const port = 8080;

// Définition de la route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('<h1>Ma page d\'accueil</h1>');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

