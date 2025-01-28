const express = require('express');
const connectDB = require('./config/database');
const knightRoutes = require('./routes/knights');

const app = express();
app.use(express.json());

connectDB();

app.use('/api', knightRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
