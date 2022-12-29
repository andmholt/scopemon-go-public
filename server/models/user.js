const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    rank: {
        type: Number,
    },
    username: {
        type: String,
    },
    verifiedCaptures: {
        type: [String],
    },
    profileImgURL: {
        type: String,
    }
})

module.exports = mongoose.model('User', userSchema)