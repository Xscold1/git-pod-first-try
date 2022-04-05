const mysql = require('mysql2');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'mock',
    password: 'mock',
    database: 'mockCompe'
})

const query = async(query, params, transaction)=>{
    try{
        const result = await transaction.query(query, params);
        return result[0];
    }catch(err){
        console.error('error', err);
        throw err;
    }
}

module.exports = {
    mysqlPool: mysqlPool.promise(),
    query
}