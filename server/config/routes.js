// Requiring mongoose for funcationality
const mongoose = require('mongoose');
// require the the controllers from "../controller/<file names>"
const products = require('../controllers/Products');
const path = require('path')


module.exports = (app) => {
    // This is where all the routes go, calling on functions from the controllers
    app.get('/products', (req, res) => {
        products.allProducts(req,res)
    });

    app.get('/products/:id', (req, res) => {
        products.oneProduct(req,res)
    });

    app.post('/products', (req, res) => {
        products.createProduct(req,res)
    });

    app.put('/products/:id', (req, res) => {
        products.updateProduct(req,res)
    });

    app.delete('/products/:id', (req, res) => {
        products.destroyProduct(req,res)
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}
