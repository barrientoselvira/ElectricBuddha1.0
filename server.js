// Dependencies
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

// Express and port set up
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buddha_users");

// TESTING
// ===================================================================
// const db = require("./models");

// app.get("/populate", (req, res) => {
//     db.User.create({ userName: "danielt812", password: "123456", email: "danielt812@gmail.com"}).then(function(dbUser){

//     })
// })



app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`)
})