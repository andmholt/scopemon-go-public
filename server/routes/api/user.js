const router = require('express').Router()

const auth = require('../../middleware/auth')
const { getUserFromEmail, getUserFromUserID, getAllUsers, getLeaderboard, getTrophies } = require('../../controllers/user')

// get user levels
router.get('/getFromEmail/:email', getUserFromEmail)

// get user levels
router.get('/getFromUserID/:userID', getUserFromUserID)

// get all users
router.get('/getAll', getAllUsers)

// get leaderboard data
router.get('/getLeaderboard', getLeaderboard)

// get trophies given userID
router.get('/getTrophies/:userID', getTrophies)

module.exports = router