/** @format */

// clients/routes/clientRoutes.js
const express = require("express");
const clientController = require("../controllers/clientController");

const router = express.Router();

router.get("/", clientController.getClients);
router.get("/:id", clientController.getClientById);
router.post("/", clientController.createClient);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);

module.exports = router;
