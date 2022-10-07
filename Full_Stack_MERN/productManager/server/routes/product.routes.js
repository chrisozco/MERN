const ProductController = require('../controller/product.controller')
const {allProducts, createProduct, oneProduct} = ProductController

module.exports = app =>{
    app.get('/api/products', allProducts)
    app.post('/api/products', createProduct)
    app.get('/api/products/:id', oneProduct)
}