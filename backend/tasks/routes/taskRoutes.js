/** @format */

// tasks/routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Rutas para tareas
console.log("Configurando rutas para tareas...");
router.get("/tasks", taskController.getAllTasks);
router.get("/tasks/:id", taskController.getTaskById);
router.post("/tasks", taskController.createTask);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);
// Agrega otras rutas según tus necesidades

module.exports = router;
