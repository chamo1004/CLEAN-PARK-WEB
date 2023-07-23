const express = require('express');
const router = express.Router();
const { Customer, User, Car } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfCustomers = await Customer.findAll({ include: [User, Car] });
    res.json(listOfCustomers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const customerData = req.body;
    const newCustomer = await Customer.create(customerData);
    res.json(newCustomer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
