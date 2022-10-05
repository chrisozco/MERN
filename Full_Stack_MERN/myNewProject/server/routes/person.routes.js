const PersonController = require('../controllers/person.controller')
const {index, createPerson, getAllPeople} = PersonController

module.exports = app =>{
    app.get('/api', index)
    app.post('/api/people', createPerson)
    app.get('/api/people', getAllPeople)
}