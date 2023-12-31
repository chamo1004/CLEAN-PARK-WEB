const express = require('express');
const router = express.Router();
const { Job, Service } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfJobs = await Job.findAll({ include: Service });
    res.json(listOfJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const jobData = req.body;
    const newJob = await Job.create(jobData);
    res.json(newJob);
  } catch (error) {
    console.error("Error creating job:", error);
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
