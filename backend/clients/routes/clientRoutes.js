/** @format */

// clients/routes/clientRoutes.js
const express = require("express");
const clientController = require("../controllers/clientController");

const router = express.Router();

router.post("/create", clientController.createClient);
router.get("/get", clientController.getClients);

module.exports = router;
