const express = require('express');
const router = express.Router();
const { Job } = require('../models');

router.get('/', async (req, res) => {
  try {
    const listOfJob = await Job.findAll();
    res.json(listOfJob);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the list of jobs.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const JobData = req.body;
    const createdJob = await Job.create(JobData);
    res.json(createdJob);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the job.' });
  }
});

module.exports = router;
