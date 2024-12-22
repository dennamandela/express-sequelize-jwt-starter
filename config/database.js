require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config'); // Impor konfigurasi

const sequelize = new Sequelize(
    config[process.env.NODE_ENV || 'development'].database,
    config[process.env.NODE_ENV || 'development'].username,
    config[process.env.NODE_ENV || 'development'].password, {
        host: config[process.env.NODE_ENV || 'development'].host,
        dialect: config[process.env.NODE_ENV || 'development'].dialect,
        logging: false, // matikan logging jika tidak diperlukan
    }
);

module.exports = sequelize;