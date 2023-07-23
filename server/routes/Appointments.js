const express = require('express');
const router = express.Router();
const { Appointment, Car, Service, AppointmentService } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfAppointments = await Appointment.findAll({ include: [Car, Service] });
    res.json(listOfAppointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const appointmentData = req.body;
    const newAppointment = await Appointment.create(appointmentData);
    res.json(newAppointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
