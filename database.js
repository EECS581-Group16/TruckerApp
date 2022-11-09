const mysql = require('mysql');
const config = require('./databaseconfig.json')

const connection = mysql.createConnection({
    host: config.RDS_HOSTNAME,
    user: config.RDS_USERNAME,
    password: config.RDS_PASSWORD,
    port: config.RDS_PORT 
});

connection.connect((err) => {
    if (err) {
        console.log('Database failed to connect' + err.stack);
        return;
    }
    console.log('Connected to database');
});

connection.end();