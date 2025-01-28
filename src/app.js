const express = require('express');
const connectDB = require('./config/database');
const knightRoutes = require('./routes/knights');

const app = express();
app.use(express.json());

connectDB();

app.use('/api', knightRoutes);

module.exports = app;
