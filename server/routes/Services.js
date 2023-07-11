const express = require("express");
const router = express.Router();
const { Service } = require("../models");

router.get("/", async (req, res) => {
  const listOfServices = await Service.findAll();
  res.json(listOfServices);
});

router.post("/", async (req, res) => {
  try {
    const ServiceData = req.body;
    const createdService = await Service.create(ServiceData);
    res.json(createdService);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the serTab." });
  }
});

module.exports = router;
