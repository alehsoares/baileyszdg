// async function connect() {
//     if (global.connection && global.connection.state !== 'disconnected')
//         return global.connection;
            
//     const mysql = require("mysql2/promise");
//     const connection = await mysql.createConnection("mysql://108.167.132.33:2083/hnrtco66_bcc01");
//     console.log("Conectou no MySQL!");
//     global.connection = connection;
//     return connection;
// }

// async function selectClientes() {
//     const conn = await connect();
//     const [rows] = await conn.query('SELECT * FROM Clientes;');
//     return rows;
// }

const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: '108.167.132.33:2083',
    user: 'hnrtco66_bcc01',
    password: 'Bcc001122',
    database: 'hnrtco66_bcc01',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

async function query(query) {

    const result = await pool.query(query)
    return result[0]

}

(async () => {
    const queryResult = await query('SELECT * FROM `Clientes`');
    console.log(queryResult);
} )();

//module.exports = { selectClientes}