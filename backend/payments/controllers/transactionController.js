/** @format */

const Transaction = require("../models/transaction");

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json({ transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const { description, amount, type, createdBy } = req.body;

    const newTransaction = new Transaction({
      description,
      amount,
      type,
      createdBy,
    });

    await newTransaction.save();

    res.status(201).json({
      message: "Transacción creada exitosamente",
      transaction: newTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return res.status(404).json({ error: "Transacción no encontrada" });
    }

    res.status(200).json({ transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, type, createdBy } = req.body;

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { description, amount, type, createdBy },
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ error: "Transacción no encontrada" });
    }

    res.status(200).json({
      message: "Transacción actualizada exitosamente",
      transaction: updatedTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    if (!deletedTransaction) {
      return res.status(404).json({ error: "Transacción no encontrada" });
    }

    res.status(200).json({
      message: "Transacción eliminada exitosamente",
      transaction: deletedTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
