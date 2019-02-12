const express = require('express');
const Command = require('../models/command');

const router = express.Router(); //instancier le router

/**
 * [GET] commands/
 */
router.get('/', (req, res) => { 
    Command.find(req.query)
    .then(data => res.send(data))
    .catch(error => res.sendStatus(404));
});

/**
 * [GET] commands/:idtracking
 */
router.get('/:idtracking', (req, res) => { 
    Command.findOne({ idtracking: req.params.idtracking })
    .then(data => res.send(data))
    .catch(error => res.sendStatus(404));
});

/**
 * [POST] commands/
 */
router.post('/', (req, res) => {

    const command = new Command(req.body);

    command.save().then(
        data => res.status(201).send(data)
    ).catch(
        error => res.sendStatus(204)
    );
});

/**
 * [PUT] commands/:idtracking
 */
router.put('/:idtracking', (req, res) => {
    Command.findOne({idtracking: req.params.idtracking}).then(
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
 * [DELETE] commands/:idtracking
 */
router.delete('/:idtracking', (req, res) => {
    Command.remove({idtracking: req.params.idtracking}).then(
        data => res.sendStatus(204)
    ).catch(
        error => res.sendStatus(404)
    );
});


module.exports = router;

