const Author = require('../models/author.model')

module.exports.allAuthors = (req, res) => {
    Author.find()
        .then((authors) => {
            res.json(authors)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => {
        res.json(newAuthor)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.oneAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(singleAuthor =>{
            res.json(singleAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updateAuthor => {
            res.json(updateAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports.deleteAuthor = (req, res) =>{
    Author.findByIdAndDelete(req.params.id)
        .then(deletedAuthor =>{
            res.json(deletedAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}