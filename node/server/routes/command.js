const express = require('express');
const Command = require('../models/command');

const router = express.Router(); //instancier le router

router.get('/', (req, res) => { 
    Command.find(req.query)
    .then(data => res.send(data))
    .catch(error => res.sendStatus(404));
});

router.get('/:idtracking', (req, res) => { 
    Command.findOne({ idtracking: req.params.idtracking })
    .then(data => res.send(data))
    .catch(error => res.sendStatus(404));
});

module.exports = router;

