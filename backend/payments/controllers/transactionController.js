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

    res
      .status(201)
      .json({
        message: "Transacción creada exitosamente",
        transaction: newTransaction,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
