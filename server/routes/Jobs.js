const express = require('express');
const router = express.Router();
const { Job, Service } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfJobs = await Job.findAll({ include: Service });
    res.json(listOfJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const jobData = req.body;
    const newJob = await Job.create(jobData);
    res.json(newJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
