/** @format */

const Contract = require("../models/contract");

// Funciones de controlador
exports.updateContract = async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar si el contrato existe
    const existingContract = await Contract.findById(id);
    if (!existingContract) {
      return res.status(404).json({ error: "Contrato no encontrado" });
    }

    // Eliminar el contrato
    const deletedContract = await Contract.findOneAndDelete({ _id: id });

    res.status(200).json({
      message: "Contrato eliminado exitosamente",
      contract: deletedContract,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.deleteContract = async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar si el contrato existe
    const existingContract = await Contract.findById(id);
    if (!existingContract) {
      return res.status(404).json({ error: "Contrato no encontrado" });
    }

    // Eliminar el contrato
    const deletedContract = await Contract.findOneAndDelete({ _id: id });

    res.status(200).json({
      message: "Contrato eliminado exitosamente",
      contract: deletedContract,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.status(200).json({ contracts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.getContractById = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findById(id);

    if (!contract) {
      return res.status(404).json({ error: "Contrato no encontrado" });
    }

    res.status(200).json({ contract });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.createContract = async (req, res) => {
  try {
    const {
      client,
      productName,
      startDate,
      endDate,
      amount,
      paymentStatus,
      additionalTerms,
      observations,
      createdBy,
    } = req.body;

    // Realiza las validaciones necesarias

    const newContract = new Contract({
      client,
      productName,
      startDate,
      endDate,
      amount,
      paymentStatus,
      additionalTerms,
      observations,
      createdBy,
      // ... Otros campos del contrato
    });

    await newContract.save();

    res
      .status(201)
      .json({ message: "Contrato creado exitosamente", contract: newContract });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
