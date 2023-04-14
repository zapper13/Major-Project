const Product = require('../models/Product');

/**
 * This function retrieves all products from a database and sends them as a JSON response, handling any
 * errors that may occur.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc.
 * @param res - `res` is the response object that is sent back to the client after the server has
 * processed the request. It contains information such as the status code, headers, and the response
 * body. In this case, the response body is a JSON object containing all the products retrieved from
 * the database. If there
 */
const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({});

        res.json(products);

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}


/**
 * This function retrieves a product by its ID from a database and sends it as a JSON response,
 * handling any errors that may occur.
 * @param req - The request object represents the HTTP request that was sent by the client to the
 * server. It contains information about the request such as the URL, headers, and any data that was
 * sent in the request body.
 * @param res - `res` is the response object that is used to send the response back to the client. It
 * is an object that has methods like `json()` to send JSON data, `send()` to send plain text, and
 * `status()` to set the HTTP status code of the response. In this code
 */
const getProductById = async (req, res) => {
    try{
        const products = await Product.findById(req.params.id);

        res.json(products);

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
};