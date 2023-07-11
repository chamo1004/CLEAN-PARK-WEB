const express = require('express');
const router = express.Router();
const { Process } = require('../models');

router.get('/', async (req, res) => {
 const listOfProcess = await Process.findAll();
 res.json(listOfProcess);
});

router.post('/', async (req, res) => {
    try {
      const ProcessData = req.body;
      const createdProcess = await Process.create(ProcessData);
      res.json(createdProcess);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the serTab.' });
    }
  });
  
module.exports = router;