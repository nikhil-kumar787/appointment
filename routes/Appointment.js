const express = require("express");
const router = express.Router();
const appointmentController = require("../controller/Appointment");
// const slotController = require("../controller/slot.controller");

router.get("/appointments", appointmentController.all);
// router.get("/retrieveSlots", slotController.all);
router.post("/appointmentCreate", appointmentController.create);
module.exports = router;