const express = require('express');
const router = express.Router();
const { Manager, User } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfManagers = await Manager.findAll({ include: User, as: 'user' });
    res.json(listOfManagers);
  } catch (error) {
    console.error("Error fetching managers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const managerData = req.body;
    const newManager = await Manager.create(managerData);
    res.json(newManager);
  } catch (error) {
    console.error("Error creating manager:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
