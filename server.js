'use strict';

const fs = require('fs');
const express = require('express');

const data = JSON.parse(fs.readFileSync('countries.json', 'utf8'));

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
