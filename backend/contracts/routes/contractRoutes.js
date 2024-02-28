/** @format */

// contracts/routes/contractRoutes.js
const express = require("express");
const router = express.Router();
const contractController = require("../controllers/contractController");

// Rutas para contratos
router.get("/", contractController.getAllContracts);
router.get("/:id", contractController.getContractById);
router.post("/", contractController.createContract);
router.put("/:id", contractController.updateContract);
router.delete("/:id", contractController.updateContract);


module.exports = router;
