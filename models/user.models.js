const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,// ensures username is unique
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    active: {
        type: Boolean,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
