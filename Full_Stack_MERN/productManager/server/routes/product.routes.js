const ProductController = require('../controller/product.controller')
const {allProducts, createProduct} = ProductController

module.exports = app =>{
    app.get('/api/products', allProducts)
    app.post('/api/products', createProduct)
}