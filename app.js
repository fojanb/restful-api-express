const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
require("dotenv/config");
// Import routers and their corresponding middlewares :
const homeRouter = require("./routes/home");
// This following line is middleware
app.use("/", homeRouter);
const aboutRouter = require("./routes/about");
app.use("/about", aboutRouter);
const contactRouter = require("./routes/contact");
app.use("/contact", contactRouter);
// **ROUTES

// **Connect to Database
mongoose.connect(process.env.DB_CONNECTION);
// **PORT
app.listen(PORT);
