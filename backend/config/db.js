/* This is a JavaScript code that exports a function called `connectDB` which connects to a MongoDB
database using the `mongoose` library. It uses the `dotenv` library to load environment variables
from a `.env` file and uses the `MONGO_URI` variable to connect to the database. If the connection
is successful, it logs a message to the console. If the connection fails, it logs an error message
and exits the process with an error code. This function can be imported and used in other parts of
the code to establish a connection to the database. */

require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;