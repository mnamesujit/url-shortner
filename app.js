const express = require("express");
const { connectDB } = require("./config/db");
const routes = require("./routes/userRoutes")
const  path = require("path");
const app = express();


// Middlewares
app.use(express.json())

// Database Connection
connectDB();

// Templating Engines
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

// Serving Static files
app.use(express.static("public"));

// including user routes
app.use('/', routes);

module.exports = app;