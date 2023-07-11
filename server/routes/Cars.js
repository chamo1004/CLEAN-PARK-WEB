const express = require('express');
const router = express.Router();
const { Car } = require('../models');

router.get('/', async (req, res) => {
 const listOfCar = await Car.findAll();
 res.json(listOfCar);
});

router.post('/', async (req, res) => {
    try {
      const CarData = req.body;
      const createdCar = await Car.create(CarData);
      res.json(createdCar);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the serTab.' });
    }
  });
  
module.exports = router;