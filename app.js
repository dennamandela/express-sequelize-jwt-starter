const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const userRoutes = require('./src/routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/v1', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Sync sequelize models with database
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('Error connecting to the database:', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});