const express = require('express');
const router = express.Router();
const { Car, Customer, Appointment } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfCars = await Car.findAll({ include: [Customer, Appointment] });
    res.json(listOfCars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const carData = req.body;
    const newCar = await Car.create(carData);
    res.json(newCar);
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
