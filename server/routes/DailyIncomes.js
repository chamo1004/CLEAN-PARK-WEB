const express = require('express');
const router = express.Router();

// Import the DailyIncome model
const db = require('../models');
const DailyIncome = db.DailyIncome;

// GET all daily incomes
router.get('/', async (req, res) => {
  try {
    const dailyIncomes = await DailyIncome.findAll();
    res.json(dailyIncomes);
  } catch (error) {
    console.error('Error fetching daily incomes:', error);
    res.status(500).json({ error: 'Error fetching daily incomes' });
  }
});

// POST a new daily income
router.post('/', async (req, res) => {
  const { date, dailyincome, pdflink } = req.body;

  try {
    const newDailyIncome = await DailyIncome.create({
      date,
      dailyincome,
      pdflink,
    });

    res.status(201).json(newDailyIncome);
  } catch (error) {
    console.error('Error creating daily income:', error);
    res.status(500).json({ error: 'Error creating daily income' });
  }
});

module.exports = router;
