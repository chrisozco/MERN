const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res =>{
    console.log('Established a connection', res)
}).catch(err =>{
    console.log('Something went wrong', err)
})

