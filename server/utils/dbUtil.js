const { database } =  require('../../config')
const mysql = require('mysql')

pool = mysql.createPool({
    host: database.HOST,
    port: database.PORT,
    user: database.USER,
    password: database.PASSWORD,
    database: database.DATABASE
})

const query = function (sql, params) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, params, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                })
            }
        })
    })
}

const add = async (tables, values) => {
    const sql = `
        INSERT INTO
            ??
        SET
            ?`
    return await query(sql, [tables, values])
}

module.exports = {
    query,
    add
}