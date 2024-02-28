/** @format */

// payments/routes/invoiceRoutes.js
const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

// Rutas para facturas
router.get("/invoices", invoiceController.getAllInvoices);
router.post("/invoices", invoiceController.createInvoice);
router.put("/invoices/:id/pay", invoiceController.payInvoice);
// Agrega otras rutas según tus necesidades

module.exports = router;
