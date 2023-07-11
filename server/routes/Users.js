const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
 const listOfUser = await User.findAll();
 res.json(listOfUser);
});

router.post('/', async (req, res) => {
    try {
      const UserData = req.body;
      const createdUser = await User.create(UserData);
      res.json(createdUser);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the serTab.' });
    }
  });
  
module.exports = router;