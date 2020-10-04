const mongoose = require('mongoose');
let Schema = require('./Review')
// Creating the Schema
const ProductSchema = new mongoose.Schema({
  details: {type: String, required: true, minlength: 10},
  brand: {type: String, required: true, minlength: 5},
  category: {type: String, required: true, minlength: 3},
  name: {type: String, required: true, minlength: 4}
  // _reviews: [{type: Schema.Types.ObjectID, ref: 'Review' }]
},{timestamps:{createdAt:'createAt',updatedAt:'updatedAt'}})

// Registering the Schema as a Model
mongoose.model('Product', ProductSchema)
// mongoose.model('Review', ReviewSchema)
