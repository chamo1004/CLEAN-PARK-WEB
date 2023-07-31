const express = require('express');
const router = express.Router();
const { Customer, User, Car } = require('../models');

router.get("/:userid", async (req, res) => {
  const userid = req.params.userid;
  if (!userid) {
    return res.status(400).json({ error: "userid parameter is missing" });
  }

  try {
    const userWithCustomer = await Customer.findOne({
      where: { userid: userid },
    });

    if (!userWithCustomer) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(userWithCustomer);
  } catch (error) {
    console.error("Error fetching tutor information:", error);
    return res.status(500).json(error.message);
  }
});

module.exports = router;
