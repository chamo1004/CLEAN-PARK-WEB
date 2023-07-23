const express = require('express');
const router = express.Router();
const { AppointmentService, Appointment, Service } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfAppointmentServices = await AppointmentService.findAll({
      include: [Appointment, Service],
    });
    res.json(listOfAppointmentServices);
  } catch (error) {
    console.error("Error fetching appointment services:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const appointmentServiceData = req.body;
    const newAppointmentService = await AppointmentService.create(
      appointmentServiceData
    );
    res.json(newAppointmentService);
  } catch (error) {
    console.error("Error creating appointment service:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
