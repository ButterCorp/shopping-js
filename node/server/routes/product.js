const express = require('express');
const Product = require('../models/product');

const router = express.Router(); //instancier le router

/**
 * [GET] products/
 */
router.get('/', (req, res) => { 
    Product.find(req.query).then(data => res.send(data)); //req.query permet de rajouter des ?title=&year=
});

/**
 * [GET] products/:title // products?foo=bar=
 */
router.get('/:title', (req, res) => {
    Product.findOne({
        title: req.params.title
    }).then(
        data => res.send(data)
    ).catch(
        error => res.sendStatus(404)
    );
});

/**
 * [POST] products/
 */
router.post('/', (req, res) => {

    const product = new Product(req.body);

    product.save().then(
        data => res.status(201).send(data)
    ).catch(
        error => res.sendStatus(204)
    );
});

/**
 * [PUT] products/:title
 */
router.put('/:title', (req, res) => {
    Product.save(req.body).then(
        data => res.send(data)
    ).catch(
        error => res.sendStatus(400)
    )
})

/**
 * [DELETE] products/:title
 */
router.delete('/:title', (req, res) => {
    Product.delete(req.body).then(
        data => res.sendStatus(204)
    ).catch(
        error => res.sendStatus(404)
    );
});

module.exports = router;

