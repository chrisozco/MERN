const PersonController = require('../controllers/person.controller')
const {index, createPerson} = PersonController

module.exports = app =>{
    app.get('/api', index)
    app.post('/api/people', createPerson)
}