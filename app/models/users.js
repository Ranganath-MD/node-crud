const mongoose = require('mongoose')
const validator = require('validator')

// Extracting schema from mongoose
const Schema = mongoose.Schema

// userSChema is an instance of schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: function () {
                return "Invalid email format"
            }
        }
    },
    city: {
        type: String,
    },
    state: {
        type: String
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)


module.exports = {
    User
}