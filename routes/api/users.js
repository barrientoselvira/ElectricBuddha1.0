// Dependencies
const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const passport = require('../../passport');

// Require user model
const usersController = require("../../controllers/userController");

router.route("/")
    .get(usersController.findAll);

router.route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

router.route("/auth/register")
    .post(usersController.create);

router.route("/auth/login")
    .post(function(req,res, next) {
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo)
    }
)

router.post('/auth/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ message: 'logging out' })
    } else {
        res.send({ message: "no user to log out"})
    }
})



module.exports = router;