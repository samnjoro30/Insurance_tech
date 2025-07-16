const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String},
    firstName: { type: String, required},
    lastName: { type: String, required},
    email: {type: String, unique, required},
    phone_number: { type: String, required},
    password: {type: String, required},
})

module.exports = mongoose.model("user", userSchema);