const express = require("express");
const { connectDB } = require("./config/db");
const routes = require("./routes/userRoutes")
const app = express();

// Middlewares
app.use(express.json())

// Database Connection
connectDB();

// including user routes
app.use('/', routes)

module.exports = app;