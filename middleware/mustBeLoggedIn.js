module.exports = function() {
    return (req, res, next) => {
        // If user is authenticated, call next
        if (req.isAuthenticated()) {
            return next();
        }

        // This will get called if user isn't authenticated
        // We will respond with a 403 Forbidden response
        if (req.accepts('json')) {
            res.status(403).json({
                message: "You must be logged in to perform this action."
            });
        }
        else {
            // Render a view named forbidden
            res.status(403).render('forbidden');
        }
    }
}