const express = require('express');
const cors = require('cors');
const job = require('./job');

const app = express();

app.use(cors());

app.use(express.json());

app.set(job);

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log('listening on port ' + port);
});