/** @format */

const express = require("express");
const router = express.Router();
const bankStatementController = require("../controllers/bankStatementController");

router.get("/", bankStatementController.getAllBankStatements);
router.get("/:id", bankStatementController.getBankStatementById);
router.post("/", bankStatementController.createBankStatement);
router.put("/:id", bankStatementController.updateBankStatement);
router.put("/:id/reconcile", bankStatementController.reconcileStatement);
router.delete("/:id", bankStatementController.deleteBankStatement);

module.exports = router;
