const mongoose = require("mongoose");

const connectDatabase = async (uri) => {
  try {
    const connect = await mongoose.connect(uri);
    console.log("Database Connected successfully");
  } catch (error) {
    console.log("Database Connection error:", error);
  }
};

module.exports = connectDatabase;
