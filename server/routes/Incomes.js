// routes/income.js

const express = require('express');
const router = express.Router();
const { Income } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfIncomes = await Income.findAll();
    res.json(listOfIncomes);
  } catch (error) {
    console.error("Error fetching incomes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const incomeData = req.body;
    const newIncome = await Income.create(incomeData);
    res.json(newIncome);
  } catch (error) {
    console.error("Error creating income:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
