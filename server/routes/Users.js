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

router.post('/login', async (req, res) => {
  try {
    const { tel, password } = req.body;

    // Find the user in the database based on the provided phone number
    const user = await User.findOne({ where: { tel } });

    if (!user || user.password !== password) {
      // If the user is not found or password is incorrect, send an error response
      res.status(401).json({ error: "Invalid credentials" });
    } else {
      // Send the authenticated user information as a response
      res.json(user);
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
