// Dependencies
const mongoose = require('mongoose')
const User = require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Imports
const routes = require("./routes")

const app = express();

// Middleware set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/theThing");

// Routes
app.use(routes)

// Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};

// bcrypt tests
//==============================================================
// const testUser = new User({
//     userName: "Test2",
//     password: "Password123"
// });

// testUser.save(function(err) {
//     if (err) throw err;

//     User.findOne({ username: 'Test2' }, function(err, user) {
//         if(err) throw err;

//         user.comparePassword("Password123", function(err, isMatch) {
//             if(err) throw err;
//             console.log("Password123:", isMatch);
//         });

//         user.comparePassword("123Password", function(err, isMatch) {
//             if(err) throw err;
//             console.log("123Password:", isMatch);
//         })
//     })
// })

// Port and listener
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`)
})