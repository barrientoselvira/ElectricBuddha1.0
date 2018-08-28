// Dependencies
const express = require('express');
const path = require('path');
const router = express.Router();

// Serve up static assets
// (This will be important for when we deploy)
router.use(express.static("client/build"));

// We want to send all requests to React in client
// API routes need to be defined before we run this
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;