const mongoose = require('mongoose')
const { validationResult } = require('express-validator')

const User = require('../models/user')

// return user data
const getUserFromEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.userEmail })
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// return user data
const getUserFromUserID = async (req, res) => {
    try {
        const user = await User.findById(req.params.userID)
        console.log(user)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// return user data
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// return leaderboard data
const getLeaderboard = async (req, res) => {
    try {
        const users = await User.find()

        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// return leaderboard data
const getTrophies = async (req, res) => {
    try {
        const user = await User.findById(req.params.userID)

        res.json(user.verifiedCaptures)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = {
    getUserFromEmail,
    getUserFromUserID,
    getAllUsers,
    getLeaderboard,
    getTrophies,
}