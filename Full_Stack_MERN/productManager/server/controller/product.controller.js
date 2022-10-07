const Product = require('../models/product.model')

module.exports.allProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct)
        })
        .catch(err =>{
            res.json({ message: 'Something went wrong', error: err})
        })
}

module.exports.oneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(singleProduct => {
            res.json(singleProduct)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}