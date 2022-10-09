const AuthorController = require('../controller/author.controller')
const {allAuthors, createAuthor, oneAuthor, updateAuthor, deleteAuthor} = AuthorController

module.exports = app =>{
    app.get('/api/authors', allAuthors)
    app.post('/api/authors', createAuthor)
    app.get('/api/authors/:id', oneAuthor)
    app.put('/api/authors/:id', updateAuthor)
    app.delete('/api/authors/:id', deleteAuthor)
}