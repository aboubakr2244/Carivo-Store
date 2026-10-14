const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./Config/db");
const authRoute = require("./Routes/authRoute");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is Running ...");
});
