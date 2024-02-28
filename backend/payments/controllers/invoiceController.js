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
