// Dependencies
const express = require("express");
const router = express.Router();

// Require user model
const usersController = require("../../controllers/userController");

router.route("/")
    .get(usersController.findAll);

router.route("/auth")
    .post(usersController.create);

router.route("/:id")
    .get(usersController.findOne)
    .put(usersController.update)
    .delete(usersController.remove);

module.exports = router;