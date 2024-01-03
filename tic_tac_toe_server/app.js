const historyRouter = require('./controllers/history');
const express = require('express');
const cors = require('cors');
const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/history', historyRouter);

app.use(middleware.unknownEndpoint);

module.exports = app;