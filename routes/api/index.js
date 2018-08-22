const express = require("express");
const router = express.Router();
const userRoutes = require("./users");

// User routes
router.use("/users", userRoutes);

module.exports = router;