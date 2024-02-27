/** @format */

// contracts/models/contract.js
const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid"],
    default: "Pending",
  },
  additionalTerms: {
    type: String,
  },
  observations: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Asumo que tienes un modelo de usuario
    required: true,
  },
  // ... Otros campos del contrato
});

const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;
