const PersonController = require('../controllers/person.controller')
const {index, createPerson, getAllPeople, onePerson} = PersonController

module.exports = app =>{
    app.get('/api', index)
    app.post('/api/people', createPerson)
    app.get('/api/people', getAllPeople)
    app.get('/api/people/:id', onePerson)
}