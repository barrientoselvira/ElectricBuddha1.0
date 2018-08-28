// Dependencies
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./models');

module.exports = (app) => {
    // Set up middlewares to make passport work with sessions
    // We want to do this so we can keep users logged in until they log out
    app.use(cookieParser());
    app.use(session({
        secret: "wubbaLubbaDubDub",
        resave: false,
        saveUninitialized: false,
        // Rolling config: This will extend the session age on each request.
        // If we want to make the session last only for a definitive amount of time we would set this to false
        rolling: true,
        name: "cookie",
        cookie: {
            httpOnly: true,
            // Session cookies will be valid for 20 minutes unless requests are made
            maxAge: 20 * 60 * 1000,
            // These two configs below here are for production only.
            // Domain config: this setting will restrict cookies to a domain name
            // domain: 'electricbuddha.com'
            // Turn this setting on if site is published using HTTPS
            // secure: true,
        }
    }));

    // We will serialize the user to tell passport what data to save about a user in the session
    // Passport recommends to only serialize unique properties of our user such as username or id
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    // Deserializing user will tell passport how to turn the user ID we serialized into the session cookie
    // In this function we are finding a user with a matching Id and returning that
    // Now our User record will be available on each auth request via req.user
    passport.deserializeUser(function(userId, done) {
        db.User.findById(userId)
            .then(function(user) {
                done(null, user);
            })
            .catch(function (err) {
                done(err);
            });
    })

    // We need to tell passport to use a "local" strategy. What this means is we are matching users locally through our MongoDB
    // Alternatively we could use google, facebook, github strategies to login
    passport.use(new LocalStrategy((username, password, done) => {
        const errorMsg = "Invalid username or password";

        db.User.findOne({ username })
            .then(user => {
                // This if statement triggers when no matching users are found in our db
                if(!user) {
                    return done(null, false, { message: errorMsg });
                }

                // Calling our validate method we made in UserSchema, which will call done if passwords match
                return user.validatePassword(password)
                    .then(isMatch => done(null, isMatch ? user : false, isMatch ? null : { message: errorMsg }));
            })
            .catch(done);
    }));

    // Initialize passport.
    // (Must be done after passport is set up but before we use passport.session )
    app.use(passport.initialize());
    app.use(passport.session());
}