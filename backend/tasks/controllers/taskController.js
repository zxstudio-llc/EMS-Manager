/** @format */

// tasks/controllers/taskController.js
const Task = require("../models/task");

// Funciones de controlador para tareas
exports.getAllTasks = async (req, res) => {
  try {
      const tasks = await Task.find();
      console.log("Todas las tareas:", tasks);
    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

      if (!task) {
        console.log("Tarea no encontrada para ID:", id);
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.status(200).json({ task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, assignedTo } = req.body;

    // Realiza las validaciones necesarias

    const newTask = new Task({
      title,
      description,
      status,
      assignedTo,
      // ... Otros campos de la tarea
    });

    await newTask.save();

    res
      .status(201)
      .json({ message: "Tarea creada exitosamente", task: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar si la tarea existe
    const existingTask = await Task.findById(id);
    if (!existingTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    // Actualizar la tarea con los datos proporcionados en el cuerpo de la solicitud
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: { ...req.body, updatedAt: Date.now() } },
      { new: true }
    );

    res.status(200).json({
      message: "Tarea actualizada exitosamente",
      task: updatedTask,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar si la tarea existe
    const existingTask = await Task.findById(id);
    if (!existingTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    // Eliminar la tarea
    await Task.findByIdAndRemove(id);

    res.status(200).json({
      message: "Tarea eliminada exitosamente",
      task: existingTask,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
