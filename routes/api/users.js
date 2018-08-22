// Dependencies
const express = require("express");
const router = express.Router();

// Require user model
const usersController = require("../../controllers/controller");

router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

router.route("/:id")
    .get(usersController.findOne)
    .put(usersController.update)
    .delete(usersController.remove);

module.exports = router;