//Dependencies
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

//DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buddha_users");

//Import models
const db = require("./models");

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`)
})