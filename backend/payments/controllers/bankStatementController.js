/** @format */

const BankStatement = require("../models/bankStatement");

exports.getAllBankStatements = async (req, res) => {
  try {
    const bankStatements = await BankStatement.find();
    res.status(200).json({ bankStatements });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.createBankStatement = async (req, res) => {
  try {
    const { description, amount, createdBy } = req.body;

    const newBankStatement = new BankStatement({
      description,
      amount,
      createdBy,
    });

    await newBankStatement.save();

    res
      .status(201)
      .json({
        message: "Registro bancario creado exitosamente",
        bankStatement: newBankStatement,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.reconcileStatement = async (req, res) => {
  try {
    const { id } = req.params;

    const statement = await BankStatement.findById(id);
    if (!statement) {
      return res.status(404).json({ error: "Registro bancario no encontrado" });
    }

    statement.reconciled = true;
    await statement.save();

    res
      .status(200)
      .json({
        message: "Registro bancario conciliado exitosamente",
        bankStatement: statement,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
