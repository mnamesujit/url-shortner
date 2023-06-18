require('dotenv').config()
const express = require("express");
const connnectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')



const app = express();

// DB Connection
connnectDB();

// Middlewareds
app.use('/', userRoutes)

app.listen(process.env.PORT, () => console.log(`Server is listening at PORT: ${process.env.PORT}`))
