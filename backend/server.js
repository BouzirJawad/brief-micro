const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
require('dotenv').config()
const briefRoutes = require("./routes/brief.routes")

const app = express()
const PORT = process.env.PORT || 7461

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/briefs", briefRoutes)

app.listen(PORT, 
    console.log(`Server is running on PORT ${PORT}`)
)
