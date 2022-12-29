const { default: mongoose } = require('mongoose')
const Capture = require('../models/capture')

// get all exercises
const getCaptures = async (req, res) => {
    // return list of exercises which have category 'chords'
    try {
        const captures = await Capture.find()
        console.log(captures)
        res.json(captures)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// verify capture
// captureID, userID
const verifyCapture = async (req, res) => {
    try {
        const capture = await Capture.findByIdAndUpdate(req.body.captureID,
            {$push: {
                verifiedBy: mongoose.Types.ObjectId(req.body.userID)
            }}
        )
        console.log(capture)
        res.send(capture)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// nullify capture
const nullifyCapture = async (req, res) => {
    try {
        const capture = await Capture.findByIdAndUpdate(req.body.captureID,
            {$push: {
                nullifiedBy: mongoose.Types.ObjectId(req.body.userID)
            }}
        )
        console.log(capture)
        res.send(capture)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// nullify capture
const newCapture = async (req, res) => {
    try {
        const newCapture = await Capture.create({
            url: req.body.imgURL,
            capturedUser: req.body.capturedID,
            userID: req.body.userID
        })
        console.log(newCapture)
        res.send(newCapture)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = {
    getCaptures,
    verifyCapture,
    nullifyCapture,
    newCapture
}