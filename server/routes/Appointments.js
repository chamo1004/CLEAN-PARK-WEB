const express = require('express');
const router = express.Router();
const { Appointment } = require('../models');

router.get('/', async (req, res) => {
 const listOfAppointment = await Appointment.findAll();
 res.json(listOfAppointment);
});

router.post('/', async (req, res) => {
    try {
      const AppointmentData = req.body;
      const createdAppointment = await Appointment.create(AppointmentData);
      res.json(createdAppointment);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the serTab.' });
    }
  });
  
module.exports = router;