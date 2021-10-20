const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        maxlength: 20,
        trim: true,
        required: [true, "must give username"]
    }, 
    password: {
        type: String,
        maxlength: 20,
        trim: true,
        required: [true, "must give password"] 
    }
})

module.exports = mongoose.model('User', UserSchema)