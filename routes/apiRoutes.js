const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');
const mustBeLoggedIn = require('../middleware/mustBeLoggedIn');

function getCurrentUser(req, res) {

    // We only want to show what we want to be seen publicly, No passwords will be shown on front
    const { id, username } = req.user;
    res.json({
        id, username
    });
}

router.route('/auth')
    // GET to /api/auth will return current logged in user
    .get((req, res) => {
        if(!req.user) {
            return res.status(401).json({
                message: "You are not currently logged in."
            })
        }

        getCurrentUser(req, res);
    })
    // POST to /api/auth with username and password to authenticate user
    .post(passport.authenticate('local'), (req, res) => {
        if(!req.user) {
            return res.status(401).json({
                message: "Invalid username or password."
            })
        }
        getCurrentUser(req, res);
    })
    // DELETE to /api/auth will log the user out
    .delete((req, res) => {
        req.logout();
        req.session.destroy();
        res.json({
            message: "You have been logged out."
        });
    });

router.route('/users')
    .post((req, res, next) => {
        db.User.create(req.body)
            .then(user => {
                const { id, username } = user;
                res.json({
                    id, username
                });
            })
            .catch(err => {
                // Error will mean that a username already exists
                // We will handle this by redirecting user back to create screen with a flash message
                if(err.code === 11000) {
                    res.status(400).json({
                        message: "Username already in use."
                    })
                }
                // Otherwise it's an unexpected error, so we will send it to the next middleware
                next(err);
            });
    });

router.route('/dashboard')
    .get(mustBeLoggedIn(), (req, res) => {
        res.json([
            "Log in success!",
            "WubbaLubbaDubDub!"
        ]);
    });

module.exports = router;