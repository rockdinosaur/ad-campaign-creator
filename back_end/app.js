const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors')

const app = express();

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/shoelace_challenge', { useNewUrlParser: true });
}

app.use(cors());
app.use(bodyParser.json());

routes(app);

module.exports = app;
