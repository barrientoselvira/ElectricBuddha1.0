//Dependencies/Schema ref
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Schema
let UserSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        unique: true,
        required: "Username is required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [
            function(input) {
                return input.length >= 6;
            },
            "Password needs to be at least 8 characters long"
        ]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Please ender a valid e-mail"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
})

let User = mongoose.model("User", UserSchema);

module.exports = User