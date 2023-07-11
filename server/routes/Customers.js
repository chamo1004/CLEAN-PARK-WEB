const express = require('express');
const router = express.Router();
const { Customer } = require('../models');

router.get('/', async (req, res) => {
 const listOfCustomer = await Customer.findAll();
 res.json(listOfCustomer);
});

router.post('/', async (req, res) => {
    try {
      const CustomerData = req.body;
      const createdCustomer = await Customer.create(CustomerData);
      res.json(createdCustomer);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the serTab.' });
    }
  });
  
module.exports = router;