const express = require('express');
const router = express.Router();
const { Manager } = require('../models');

router.get('/', async (req, res) => {
  try {
    const listOfManagers = await Manager.findAll();
    res.json(listOfManagers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the list of managers.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const managerData = req.body;
    const createdManager = await Manager.create(managerData);
    res.json(createdManager);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the manager.' });
  }
});

module.exports = router;
