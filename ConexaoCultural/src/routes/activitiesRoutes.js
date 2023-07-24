const controller = require("../controllers/activitiesController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllActivities);

router.get("/:id", controller.findActivityById);

router.post("/add", controller.addNewActivity);

router.put("/:id", controller.updateActivity);

router.patch("/:id", controller.updateLocation);

router.delete("/:id", controller.deleteActivity);

module.exports = router
