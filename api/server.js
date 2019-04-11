const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const Megamen = require('../roster/roster-model.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'Up and Running' });
    
});

server.get('/megamen', async (req, res) => {
    const rows = await Megamen.getAll();

    res.status(200).json(rows);
});

server.delete('/megamen/:id', async (req, res) => {
    const rows = await Megamen.remove(req.params.id);

    res.status(200).json(rows);
})


module.exports = server;