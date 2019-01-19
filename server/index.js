const express = require('express');
const bodyParser = require('body-parser');
const ctr = require('./controller.js')

let app = express();
app.use(bodyParser.json())

app.get('/people', ctr.read);
app.put('/people/:id', ctr.update)

app.listen(5000, () => console.log('Listening on 5000'))
