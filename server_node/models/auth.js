const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String},
    firstName: { type: String},
    lastName: { type: String},
    email: {type: String},
    phone_number: { type: String},
    password: {type: String},
})

module.exports = mongoose.model("user", userSchema);