// Dependencies
const express = require('express');
// Init express router to export
const router = express.Router();

// /api will be in front of each api route
router.use('/api', require('./apiRoutes'));

// html routes will be as is
router.use(require('./htmlRoutes'));

module.exports = router;