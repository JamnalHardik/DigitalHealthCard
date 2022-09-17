require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = process.env.PORT || 8000;
const MongoStore = require("connect-mongo");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const hospitalRoutes = require("./routes/hospital");
const userRoutes = require("./routes/user");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// my routes
app.use("/api", authRoutes);
app.use("/api", hospitalRoutes);
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
