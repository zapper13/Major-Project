/* This code is importing product data from a local file, connecting to a database using a
configuration file, and then inserting the product data into the database using a model. The
`dotenv` package is used to load environment variables from a `.env` file. The `importData` function
is an asynchronous function that deletes any existing data in the database, inserts the product
data, and logs a success message. Finally, the function exits the process. */

require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
    
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();