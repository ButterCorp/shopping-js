const express = require('express');
const movieRouter = require('./routes/movie');
const productRouter = require('./routes/product');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/movies', movieRouter); //define patern for the router
app.use('/products', productRouter); //define patern for the router

app.listen(3000, () => console.log('Listening on port 3000'));