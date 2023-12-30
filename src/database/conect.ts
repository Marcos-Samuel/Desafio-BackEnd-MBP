import Knex from 'knex';

export const knex = Knex({
    client: 'pg',
    version: '7.2',
    connection: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_POST, 10),
        user: process.env.DB_USER,
        password : process.env.DB_PASS,
        database: process.env.DB_DATABASE
    }
});

