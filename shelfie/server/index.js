const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
require('dotenv').config();

let app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

app.get('/api/inventory', controller.get)
app.post('/api/product', controller.post)
app.delete('/api/delete/:id', controller.delete)


app.listen(3005, () => console.log("running on port 3005"));