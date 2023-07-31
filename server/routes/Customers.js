const express = require("express");
const router = express.Router();
const { Customer } = require("../models");

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).json({ error: "userId parameter is missing" });
  }

  try {
    const userWithCustomer = await Customer.findOne({
      where: { userid: userId },
    });

    if (!userWithCustomer) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(userWithCustomer);
  } catch (error) {
    console.error("Error fetching customer information:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).json({ error: "userId parameter is missing" });
  }

  try {
    const updatedData = req.body;
    await Customer.update(updatedData, { where: { userid: userId } });
    return res.status(200).json({ message: "Customer data updated successfully" });
  } catch (error) {
    console.error("Error updating customer data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    return res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error creating customer:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
