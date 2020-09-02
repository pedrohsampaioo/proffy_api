import knex from 'knex';

const db = knex({
    client: 'mysql',
    version: '8.0',
    connection: {
        host:'127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'proffy'
    }
});

export default db;