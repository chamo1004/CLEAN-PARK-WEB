const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfUsers = await User.findAll();
    res.json(listOfUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await User.create(userData);
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
