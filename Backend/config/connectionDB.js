const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI || "mongodb://localhost:27017/foodrecipe");
    console.log("Database connected successfully");
    return connection;
  } catch (error) {
    console.log("Warning: Could not connect to database. Running without database:", error.message);
    console.log("Note: To use the database, please install MongoDB or set DB_URI to a valid connection string");
    return null;
  }
};

module.exports = connectDb;
