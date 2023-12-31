const express = require('express');
const router = express.Router();
const { Appointment, Car, Service, AppointmentService } = require('../models');

// Create a new appointment
router.post('/', async (req, res) => {
  console.log("COMING TO THE APPOINMENT POST :::")
  try {
    const {
      title,
      date,
      time,
      confirmation,
      status = "pending",
      servicetype,
      carid,
          } = req.body;

    // Create the appointment in the database
    console.log('req.body: ', req.body)
    const newAppointment = await Appointment.create({
      title,
      date,
      time,
      confirmation,
      status,
      servicetype,
      carid
    });
    console.log("coming here!!!:")
    res.status(201).json(newAppointment);
  } catch (error) {
    console.log("COMING TO THE ERROR CATCH: ", error)
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:appointmentid', async (req, res) => {
  try {
    const appointmentId = req.params.appointmentid;
    const { status } = req.body;

    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    appointment.status = status;
    await appointment.save();

    res.json(appointment);
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all appointments
router.get('/', async (req, res) => {
  try {
    const allAppointments = await Appointment.findAll({
      include: [
        {
          model: Car // Include the Car model to get car details for each appointment
        },
        {
          model: Service, // Include the Service model through the AppointmentService join table
          through: { attributes: [] } // To exclude the join table attributes from the response
        }
      ]
    });

    res.json(allAppointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single appointment by ID
router.get('/:appointmentid', async (req, res) => {
  const { appointmentid } = req.params;
  try {
    const appointment = await Appointment.findByPk(appointmentid, {
      include: [
        {
          model: Car // Include the Car model to get car details for the appointment
        },
        {
          model: Service, // Include the Service model through the AppointmentService join table
          through: { attributes: [] } // To exclude the join table attributes from the response
        }
      ]
    });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json(appointment);
  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update an appointment by ID
router.put('/:appointmentid', async (req, res) => {
  const { appointmentid } = req.params;
  try {
    const {
      title,
      date,
      time,
      confirmation,
      status 
    } = req.body;

    // Find the appointment by ID
    const appointment = await Appointment.findByPk(appointmentid);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Update the appointment in the database
    await appointment.update({
      title,
      date,
      time,
      confirmation,
      status
    });

    res.json(appointment);
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete an appointment by ID
router.delete('/:appointmentid', async (req, res) => {
  const { appointmentid } = req.params;
  try {
    // Find the appointment by ID
    const appointment = await Appointment.findByPk(appointmentid);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Delete the appointment from the database
    await appointment.destroy();

    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
