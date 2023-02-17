const express = require("express");
const connectDB = require("./config/connectDb");

var bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();

var cors = require("cors");
app.use(cors());
require("dotenv").config();
let port = process.env.PORT;
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
connectDB();

// app.use("/api/auth", authRouter);

app.listen(port, function () {
  console.log(`khoi tao server hi ${process.env.PORT}`);
});
