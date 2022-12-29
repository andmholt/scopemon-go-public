const config = require('config')
const mongoose = require('mongoose')

const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log("mongoDB connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB