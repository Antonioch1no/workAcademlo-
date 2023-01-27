const {Sequelize} = require('sequelize');

const db = new Sequelize({
    database: "cursesapp",
    username: "mac",
    host: "localhost",
    port: "5432",
    password: "",
    dialect: "postgres",
});

module.exports = db;