/** @format */

// app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authRoutes = require("./auth/routes/authRoutes");
const authMiddleware = require("./auth/middleware/authMiddleware");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Manejar eventos de conexión de MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conectado a MongoDB");
});

// Configuración de Express
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de rutas
app.use("/auth", authRoutes);
app.use("/clients", clientRoutes);

// Middleware de autorización
app.use("/api", authMiddleware);

// Agrega otras rutas aquí

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
