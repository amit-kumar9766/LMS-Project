const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//import routes
const authRoutes = require("./routes/auth");
const { modal } = require("./models/User");

//app
const app = express();
const port = 5000;
var cors = require("cors");
var bodyParser = require('body-parser')
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())    //please search more!
const db =
  "mongodb+srv://Amit:Amit@123@cluster0.1rjsk.mongodb.net/LMS-Mern?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((error) => console.log("no connnection", error));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", function (req, res) {
  res.send("GET request to the homepage");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
