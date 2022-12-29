const router = require('express').Router()

const auth = require('../../middleware/auth')
const { getCaptures, verifyCapture, nullifyCapture, newCapture } = require('../../controllers/captures')

// get all captures
router.get('/get', getCaptures)

// post capture verification
router.post('/verify', verifyCapture)

// post capture nullification
router.post('/nullify', nullifyCapture)

// post create capture
router.post('/new', newCapture)

module.exports = router