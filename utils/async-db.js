/*
* promise 封装mysql模块
*
* */
const mysql = require('mysql')
const mysqlcofig=require('../server/mysql.config')
const pool=mysql.createPool(mysqlcofig)

let query = function( sql, values ) {
	return new Promise(( resolve, reject ) => {
		pool.getConnection(function(err, connection) {
			if (err) {
				reject( err )
			} else {
				connection.query(sql, values, ( err, rows) => {
					if ( err ) {
						reject( err )
					} else {
						resolve( rows )
					}
					connection.release()
				})
			}
		})
	})
}

module.exports = { query }
