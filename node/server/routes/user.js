const express = require('express');
const User = require('../models/user');

const router = express.Router();

/**
 * [GET] List all users.
 */
router.get('/', (req, res) => { 
    User.find(req.query).then(data => res.send(data));
});

/**
 * [GET] Get a single User.
 */
router.get('/:username', (req, res) => {
    User.findOne({
        username: req.params.username
    }).then(
        data => res.send(data)
    );
});

/**
 * [PUT] Edit username.
 */
router.put('/:username/edit', (req, res) => {
    User.findOne({username: req.params.username}).then(
        data => Object.assign(data, req.body).save().then(
            data => res.send(data)
        ).catch(
            error => res.sendStatus(400)
        )
    ).catch(
        error => res.sendStatus(404)
    )
});

/**
 * [POST] Create User.
 */
router.post('/new', (req, res) => {

    const user = new User(req.body);

    user.save().then(
        data => res.status(201).send(data)
    ).catch(
        error => res.sendStatus(204)
    );
});

module.exports = router;