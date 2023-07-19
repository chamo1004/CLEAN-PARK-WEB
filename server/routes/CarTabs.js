const express = require('express');
const router = express.Router();
const { Appointment, Service } = require('../models');

// Get all Appointments with their associated Service types
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      include: [
        {
          model: Service,
          as: 'service', // Make sure to use the alias defined in the Appointment model
          attributes: ['servicetype'],
        },
      ],
    });

    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
