const controller = require("../controllers/usersController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllUsers);

router.get("/:id", controller.getUserById);

router.post("/add", controller.addNewUser);

router.put("/:id", controller.attUser);

router.patch("/:id", controller.updateUserEmail);

router.delete("/:id", controller.deleteUser);

module.exports = router