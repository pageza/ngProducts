const mongoose = require('mongoose');
const Product = require('./Product')
let Schema = mongoose.Schema
// Creating the Schema
const ReviewSchema = new mongoose.Schema({
  details: {type: String, required: true, minlength: 10},
  author: {type: String, required: true, minlength: 5 },
  product: [{type: Schema.Types.ObjectID, ref: 'Product'}]
},{timestamps:{createdAt:'createAt',updatedAt:'updatedAt'}})

// Registering the Schema as a Model
mongoose.model('Review', ReviewSchema)
// mongoose.model('Product', ProductSchema)
