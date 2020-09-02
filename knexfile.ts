import path from 'path';

module.exports = {
    client: 'mysql',
    version: '8.0',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'proffy'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};