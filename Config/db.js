const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    await mongoose.connect(url);
    console.log("MongoDB Connected ..");
  } catch (err) {
    console.log("db connection failed");
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
