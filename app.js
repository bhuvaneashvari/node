const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
//const path = require('path');
const url = 'mongodb://localhost/Studentinfo'

const app = express();

const db = require('./config/db').database;

mongoose.connect(db, {useNewUrlParser: true})
    .then( () => {
            console.log('database connected successfully.........')
    })
    .catch( (err) => {
            console.log('unable to connect with the database', err)
    });
    
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//app.get('/', (req, res) => {
  //  res.send('<h1>hello</h1>')
//});

const postRoutes = require('./routes/apis/post');

app.use('/api/posts', postRoutes);

app.listen(port, () => {
    console.log('server started', port)
});