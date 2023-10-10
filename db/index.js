const { Sequelize } = require('sequelize');

const db = new Sequelize(
    "TEST",
    "root",
    "",
    {
        host: '127.0.1.1:8080',
        dialect: 'mysql',
    });

db.sync({ force: true }).then(() => {
    console.log("Database created");
}
);

module.exports = db;
