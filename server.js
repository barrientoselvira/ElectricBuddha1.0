// Dependencies
const mongoose = require('mongoose');
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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buddha_users");

// Routes
app.use(routes)

// Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};

// Port and listener
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`)
})