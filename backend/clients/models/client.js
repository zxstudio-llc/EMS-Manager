/** @format */

// clients/models/client.js
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  passport: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  observations: String,
  requirements: String,
  products: [
    {
      type: String,
      enum: ["branding", "desarrollo web", "produccion audiovisual"],
    },
  ],
  queryType: String,
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
