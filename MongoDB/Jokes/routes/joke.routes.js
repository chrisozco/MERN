const JokeController = require('../controllers/joke.controller');
const {findAllJokes, findOneJoke, createNewJoke, updateJoke, deleteJoke} = JokeController

module.exports = app => {
    app.get('/api/jokes', findAllJokes);
    app.post('/api/jokes', createNewJoke);
    app.get('/api/jokes/:id', findOneJoke);
    app.put('/api/jokes/:id', updateJoke);
    app.delete('/api/jokes/:id', deleteJoke);
}
