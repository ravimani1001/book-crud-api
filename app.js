const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const bookRoutes = require("./routes/bookRoutes")
require("dotenv").config();

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.get("/" , (req , res) => {
    res.send("API running")
})

app.use("/api" , bookRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT , ()=>{
    console.log(`API running on port number ${PORT}`)
})