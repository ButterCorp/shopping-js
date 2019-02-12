const express = require('express');
const movieRouter = require('./routes/movie')

const app = express();

app.use('/movies', movieRouter); //define patern for the router

app.listen(3000, () => console.log('Listening on port 3000'));