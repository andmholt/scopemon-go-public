const mongoose = require('mongoose')

const captureSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    capturedUser: {
        type: String,
        retured: true,
    },
    userID: {
        type: String,
        required: true,
    },
    verifiedBy: {
        type: [String],
    },
    nullifiedBy: {
        type: [String],
    }
})

module.exports = mongoose.model('Capture', captureSchema)