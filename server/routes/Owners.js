const express = require('express');
const router = express.Router();
const { Owner } = require('../models');

router.get('/', async (req, res) => {
 const listOfOwner = await Owner.findAll();
 res.json(listOfOwner);
});

router.post('/', async (req, res) => {
    try {
      const OwnerData = req.body;
      const createdOwner = await Owner.create(OwnerData);
      res.json(createdOwner);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the serTab.' });
    }
  });
  
module.exports = router;