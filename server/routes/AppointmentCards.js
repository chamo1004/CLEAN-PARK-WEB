const express = require('express');
const router = express.Router();
const { Appointment, Service, AppointmentService } = require('../models');

// Get all Appointments with associated Services
router.get('/', async (req, res) => {
  try {
    const appointmentsWithServices = await Appointment.findAll({
      include: [
        {
          model: Service,
          attributes: ['servicetype'],
          through: {
            model: AppointmentService,
          },
        },
      ],
    });

    res.json(appointmentsWithServices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
