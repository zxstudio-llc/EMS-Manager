/** @format */

const mongoose = require("mongoose");

const bankStatementSchema = new mongoose.Schema({
  description: String,
  amount: {
    type: Number,
    required: true,
  },
  reconciled: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Asegúrate de tener el modelo User correctamente definido
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BankStatement = mongoose.model("BankStatement", bankStatementSchema);
module.exports = BankStatement;
