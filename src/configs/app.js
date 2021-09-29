const express = require('express');
const setupRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

module.exports = app;
