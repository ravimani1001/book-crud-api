const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DATABASE}`)
        console.log("Database Connected!")
        // console.log(connection)
    } catch (err) {
        console.error("Error while connecting to database " , err.message)
        process.exit(1)
    }
}

module.exports = connectDB