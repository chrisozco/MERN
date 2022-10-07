const Person = require('../models/person.model')

module.exports.index = (req, res) =>{
    res.json({
        message:'Hello World'
    })
}

module.exports.getAllPeople = (req, res) => {
    Person.find()
        .then((allPeople) => {
            res.json(allPeople)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(newPerson => {
            res.json(newPerson)
        })
        .catch((err) =>{
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.onePerson = (req, res) => {
    Person.findById(req.params.id)
        .then(singlePerson => {
            res.json(singlePerson)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}