#!/usr/bin/node
const express = require('express');
const app = express();
const port = 1245;

const AppController = require('../controllers/AppController');



app.get('/', AppController.getHomepage);
app.get('/students', AppController.getStudents);

app.listen(port, () => { })

module.exports = app
