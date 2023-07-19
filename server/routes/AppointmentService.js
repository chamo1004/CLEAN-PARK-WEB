const express = require('express');
const router = express.Router();
const { Appointment, Service } = require('../models');

// Get all Appointments with their associated Service types
router.get('/appointment', async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      include: [
        {
          model: Service,
          as: 'services', // Make sure to use the alias defined in the Appointment model
          attributes: ['serviceid', 'servicetype'], // You can include any other Service attributes you need
          through: { attributes: [] }, // This will exclude the join table attributes from the result
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
