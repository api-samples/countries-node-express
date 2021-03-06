'use strict';

const express = require('express');

const data = require('./countries.json');

export const app = express();

app.get('/countries/:cca2', (req, res) => {
    const found = data.find((c) => c.cca2 === req.params.cca2);
    if (found) {
        res.send(found);
    } else {
        res.status(404).send({message: 'Not Found'});
    }
});

app.listen(3000);
