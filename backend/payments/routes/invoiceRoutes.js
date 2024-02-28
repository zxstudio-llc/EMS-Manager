/** @format */

// payments/routes/invoiceRoutes.js
const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

// Rutas para facturas
router.get("/", invoiceController.getAllInvoices);
router.get("/:id", invoiceController.getInvoiceById); // Nueva ruta para obtener una factura por ID
router.post("/", invoiceController.createInvoice);
router.put("/:id/pay", invoiceController.payInvoice);
router.put("/:id", invoiceController.updateInvoice); // Nueva ruta para actualizar una factura por ID
router.delete("/:id", invoiceController.deleteInvoice); // Nueva ruta para eliminar una factura por ID

// Agrega otras rutas según tus necesidades

module.exports = router;
