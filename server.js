// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Define PORT and express init
const PORT = process.env.PORT || 8080;
const app = express();

// Middleware config
//===================================================
// Log requests to console to check for status codes
app.use(morgan('dev'));

// Body-parser set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Passport configuration (This must be before we require our routes)
require('./passport')(app);

// Require in our routes
app.use(require('./routes'));

// Error message for handling middleware
app.use((error, req, res, next) => {
    console.error(error);
    res.json({
        error
    })
});

require('./middleware/mongoose')()
    .then(() => {
        app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
    })
    .catch(err => {
        console.error('Unable to connect to MongoDB')
        console.error(err);
    });