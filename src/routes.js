const express = require('express');
const sentencesController = require('./controllers/SentencesController');

const routes = express.Router();

routes.get('/', sentencesController.generateSentence);

module.exports = routes;