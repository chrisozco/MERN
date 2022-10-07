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

module.exports.updateProduct = (req,res) =>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => {
            res.json(updatedProduct)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct => {
            res.json(deletedProduct)
        })
        .catch((err) =>{
            res.json({ message: 'Something went wrong', error: err })
        })
}