// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Creating User Schema for mongoDB
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Generate our hash password before user gets saved to db
// We don't want to use an arrow function here because it will be bound to this function's scope
UserSchema.pre('save', function(next) {
    const user = this;

    // Only hash password if it has been modified or is new
    if (!user.isModified('password')) {
        return next();
    }

    // Generate salts for password encryption
    // In this instance we will salt our password 8 times
    bcrypt.genSalt(8, function(err, salt) {
        if (err) return next(err);

        // Hash our password along with the salts we created
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;

            next();
        });
    });
});

// Create a method to validate if there is a password match or not
UserSchema.methods.validatePassword = function(candidatePassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return reject(err);
            resolve(isMatch);
        });
    });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;