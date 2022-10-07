const ProductController = require('../controller/product.controller')
const {allProducts, createProduct, oneProduct, updateProduct, deleteProduct} = ProductController

module.exports = app =>{
    app.get('/api/products', allProducts)
    app.post('/api/products', createProduct)
    app.get('/api/products/:id', oneProduct)
    app.put('/api/products/:id', updateProduct)
    app.delete('/api/products/:id', deleteProduct)
}