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

router.get('/byId/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const servicecontent = await Service.findByPk(id, {
      include: [
        {
          model: Job,
          attributes: ['title', 'price'],
        },
      ],
    });
    if (!servicecontent) {
      return res.status(404).json({ error: 'Service content not found.' });
    }
    res.json(servicecontent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
