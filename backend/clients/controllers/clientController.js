/** @format */

// clients/controllers/clientController.js
const Client = require("../models/client");
const validationUtils = require("../../validation");

exports.createClient = async (req, res) => {
  try {
    // Validar los datos antes de crear el cliente
    const validationResult = validationUtils.validateClientData(req.body);
    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error.message });
    }

    // Crear el cliente si la validación es exitosa
    const newClient = await Client.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar los datos antes de actualizar el cliente
    const validationResult = validationUtils.validateClientData(req.body);
    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error.message });
    }

    // Actualizar el cliente si la validación es exitosa
    const updatedClient = await Client.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedClient) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.status(200).json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await Client.findByIdAndDelete(id);
    if (!deletedClient) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.status(200).json(deletedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
