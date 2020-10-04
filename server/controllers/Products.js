const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
  allProducts: (req,res) => {
    Product.find()
        .then(data =>  res.json(data))
        .catch(err => res.json(err))
  },
  oneProduct: (req,res) => {
    Product.findOne({_id: req.params.id})
      .then( product => res.json(product))
      .catch( err => res.json(err))
  },
  createProduct: (req,res) => {
    const newProduct = new Product()
    newProduct.brand = req.body.data.brand;
    newProduct.category = req.body.data.category;
    newProduct.details = req.body.data.details;
    newProduct.name = req.body.data.name;
    newProduct.save()
      .then( newProduct  => res.redirect('/products'))
      .catch( err => res.json(err))
  },
  updateProduct: (req,res) => {
    Product.updateOne({_id: req.params.id}, {
      brand: req.body.brand,
      category: req.body.category,
      details: req.body.details,
      name: req.body.name
    })
        .then(res.redirect('/products'))
      .catch( err => res.json(err))
  },
  destroyProduct: (req,res) => {
    Product.deleteOne({_id: req.params.id})
      .then( res.redirect('/products'))
      .catch( err => res.json(err))
  }
}
