const express = require('express');
const router = express.Router();
const { Service, Job } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfServices = await Service.findAll({
      include: [Job],
    });
    res.json(listOfServices);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const serviceData = req.body;
    const newService = await Service.create(serviceData);
    res.json(newService);
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = router;
