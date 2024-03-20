const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para el acortador de URL
app.post("/shorten", (req, res) => {
  const originalUrl = req.body.url;
  // Aquí debes implementar la lógica para acortar la URL y devolver la URL corta
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
