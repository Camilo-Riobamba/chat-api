import { Sequelize } from 'sequelize';

const connection = new Sequelize({
    dialect: 'postgres',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    database: 'postgres',
    password: 'postgres',
    ssl: true
});

export default connection;
