const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.post('/api/users', UserController.createNewUser);
    app.get('/api/findUser/:id', UserController.findOneSingleUser);
    app.put('/api/updateUser/:id', UserController.updateExistingUser);
    app.delete('/api/deleteUser/:id', UserController.deleteAnExistingUser);
}
