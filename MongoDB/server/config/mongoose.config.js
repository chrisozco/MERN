const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_first_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res =>{
    console.log('Established a connection to the database', res)
}).catch(err =>{
    console.log('Something went wrong when connecting to the database ', err)
})

