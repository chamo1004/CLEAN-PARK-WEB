const express = require('express');
const router = express.Router();
const { Service, Job } = require('../models');

// Get all services and their associated jobs
router.get('/byId/:Id', async (req, res) => {
  try {
    const servicesWithJobs = await Service.findAll({
      include: [
        {
          model: Job,
          attributes: ['jobid', 'title', 'price'],
        },
      ],
    });

    res.json(servicesWithJobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
