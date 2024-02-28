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

exports.getBankStatementById = async (req, res) => {
  try {
    const { id } = req.params;

    const bankStatement = await BankStatement.findById(id);
    if (!bankStatement) {
      return res.status(404).json({ error: "Registro bancario no encontrado" });
    }

    res.status(200).json({ bankStatement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.updateBankStatement = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, createdBy } = req.body;

    const updatedBankStatement = await BankStatement.findByIdAndUpdate(
      id,
      { description, amount, createdBy },
      { new: true }
    );

    if (!updatedBankStatement) {
      return res.status(404).json({ error: "Registro bancario no encontrado" });
    }

    res.status(200).json({
      message: "Registro bancario actualizado exitosamente",
      bankStatement: updatedBankStatement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.updateBankStatement = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, createdBy } = req.body;

    const updatedBankStatement = await BankStatement.findByIdAndUpdate(
      id,
      { description, amount, createdBy },
      { new: true }
    );

    if (!updatedBankStatement) {
      return res.status(404).json({ error: "Registro bancario no encontrado" });
    }

    res.status(200).json({
      message: "Registro bancario actualizado exitosamente",
      bankStatement: updatedBankStatement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.deleteBankStatement = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBankStatement = await BankStatement.findByIdAndDelete(id);
    if (!deletedBankStatement) {
      return res.status(404).json({ error: "Registro bancario no encontrado" });
    }

    res.status(200).json({
      message: "Registro bancario eliminado exitosamente",
      bankStatement: deletedBankStatement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
