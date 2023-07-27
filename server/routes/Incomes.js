const express = require('express');
const router = express.Router();
const { Income, DailyIncome } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfIncomes = await Income.findAll({ include: Service });
    res.json(listOfIncomes);
  } catch (error) {
    console.error("Error fetching Incomes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const IncomeData = req.body;
    const newIncome = await Income.create(IncomeData);
    res.json(newIncome);
  } catch (error) {
    console.error("Error creating Income:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.delete('/:jobid', async (req, res) => {
  try {
    const { jobid } = req.params;
    // Find the job by jobid
    const jobToDelete = await Job.findByPk(jobid);
    if (!jobToDelete) {
      return res.status(404).json({ error: "Job not found" });
    }
    // Delete the job
    await jobToDelete.destroy();
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
