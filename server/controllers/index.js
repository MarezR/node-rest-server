const express = require('express');

const app = express();
app.use(require('./loginController'));
app.use(require('./usuarioController'));


module.exports = app;