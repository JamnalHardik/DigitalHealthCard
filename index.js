const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cookieParser = require('cookie-parser');
const port = 8000;

const authRoutes = require("./routes/auth");

mongoose.connect('mongodb://localhost:27017/healthCard', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database Connected");
});


// Middlewares
app.use(express.json());
app.use(cookieParser());

// my routes
app.use("/api", authRoutes);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});