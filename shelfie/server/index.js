const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');

let app = express();

app.use(bodyParser.json());


app.listen(3005, () => console.log("running on port 3005"));