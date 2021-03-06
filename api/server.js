const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('./middlewares/cors'),
    mongoose = require('mongoose'),
    config = require('./db');

const curriculumRoute = require('./routes/curriculum');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true })
    .then(() => { console.log('Database is connected') })
    .catch(err => { console.log('Can not connect to the database', err) });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

app.use('/api/v1', curriculumRoute);

let port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log('Listen on port ' + port);
})