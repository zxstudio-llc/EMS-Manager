/** @format */

const express = require("express");
const router = express.Router();
const bankStatementController = require("../controllers/bankStatementController");

router.get("/bankstatements", bankStatementController.getAllBankStatements);
router.post("/bankstatements", bankStatementController.createBankStatement);
router.put(
  "/bankstatements/:id/reconcile",
  bankStatementController.reconcileStatement
);

module.exports = router;
