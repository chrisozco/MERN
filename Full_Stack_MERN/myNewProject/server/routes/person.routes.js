const PersonController = require('../controllers/person.controller')
const {createPerson, getAllPeople, onePerson, updatePerson, deletePerson} = PersonController

module.exports = app =>{
    app.post('/api/people', createPerson)
    app.get('/api/people', getAllPeople)
    app.get('/api/people/:id', onePerson)
    app.put('/api/people/:id', updatePerson)
    app.delete('/api/people/:id', deletePerson)
}