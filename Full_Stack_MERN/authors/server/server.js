const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors(), express.json(), express.urlencoded({ extended: true }))

require('./config/mongoose.config')
const AuthorRoute = require('./routes/author.routes')
AuthorRoute(app)

app.listen(8000, () => console.log('Listening on PORT 8000') );