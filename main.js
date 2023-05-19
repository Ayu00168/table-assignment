const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const dataRouter = require("./routes/data");
const cors = require("cors");
dotenv.config();

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.ognssgx.mongodb.net/")
  .then(() => console.log("MongoDB Connected Successfully :)"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.raw({ limit: "50mb" }));
app.use("/api/v1/data", dataRouter);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
const corsOption = {
  origin: ["https://localhost:3000"],
};
app.use(cors(corsOption));

const PORT = 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
