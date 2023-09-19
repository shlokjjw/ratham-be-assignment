const mongoose = require("mongoose");

// MongoDB connection settings
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// MongoDB connection URL
const dbURL = "mongodb://localhost:27017/booking_db";

const connect = async () => {
  try {
    await mongoose.connect(dbURL, dbOptions);
    console.log("mongodb connection established");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

module.exports = connect;
