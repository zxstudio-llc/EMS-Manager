/** @format */

const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

router.get("/transactions", transactionController.getAllTransactions);
router.post("/transactions", transactionController.createTransaction);

module.exports = router;
