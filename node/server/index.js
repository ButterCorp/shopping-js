const express = require('express');
const movieRouter = require('./routes/movie');

const productRouter = require('./routes/product');

const userRouter = require('./routes/user');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/movies', movieRouter);

app.use('/products', productRouter);

app.use('/users', userRouter);

app.listen(3000, () => console.log('Listening on port 3000'));