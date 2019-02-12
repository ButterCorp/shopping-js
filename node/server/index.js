const express = require('express');
const movieRouter = require('./routes/movie')
const commandRouter = require('./routes/command')
const bodyparser = require('body-parser')

const app = express();


app.use(bodyparser.json())

app.use('/movies', movieRouter); //define patern for the router

app.use('/commands', commandRouter); 

app.listen(3000, () => console.log('Listening on port 3000'));