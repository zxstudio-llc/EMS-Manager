/** @format */

// payments/controllers/invoiceController.js
const Invoice = require("../models/invoice");

// Funciones de controlador para facturas
exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json({ invoices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
exports.getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }

    res.status(200).json({ invoice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.createInvoice = async (req, res) => {
  try {
    const { contractId, amount, dueDate, createdBy } = req.body;

    const newInvoice = new Invoice({
      contractId,
      amount,
      dueDate,
      createdBy,
    });

    await newInvoice.save();

    res
      .status(201)
      .json({ message: "Factura creada exitosamente", invoice: newInvoice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.payInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }

    invoice.paid = true;
    await invoice.save();

    res.status(200).json({ message: "Factura pagada exitosamente", invoice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
exports.updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { contractId, amount, dueDate, createdBy } = req.body;

    const updatedInvoice = await Invoice.findByIdAndUpdate(
      id,
      { contractId, amount, dueDate, createdBy },
      { new: true }
    );

    if (!updatedInvoice) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }

    res.status(200).json({
      message: "Factura actualizada exitosamente",
      invoice: updatedInvoice,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
exports.deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedInvoice = await Invoice.findByIdAndDelete(id);
    if (!deletedInvoice) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }

    res.status(200).json({
      message: "Factura eliminada exitosamente",
      invoice: deletedInvoice,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
