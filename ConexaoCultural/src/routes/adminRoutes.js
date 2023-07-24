const controller = require("../controllers/adminController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.getAllAdmins);

router.post("/add", controller.createAdmin);

router.post("/login", controller.Login);

router.delete("/:id", controller.deleteAdmin);

module.exports = router 


