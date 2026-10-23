const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./Config/db");
const authRoute = require("./Routes/authRoute");
const userRoute = require("./Routes/userRoute");
const categoryRoute = require("./Routes/categoryRoute");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is Running ...");
});
