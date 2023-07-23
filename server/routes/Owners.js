const express = require('express');
const router = express.Router();
const { Owner, User } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfOwners = await Owner.findAll({ include: User });
    res.json(listOfOwners);
  } catch (error) {
    console.error("Error fetching owners:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const ownerData = req.body;
    const newOwner = await Owner.create(ownerData);
    res.json(newOwner);
  } catch (error) {
    console.error("Error creating owner:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
