const mysql = require('mysql2')
const {createTable, createDb} = require('./queries')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mock',
    password: 'mock',
    database: 'mockCompe'
})

connection.connect((err)=>{
    if(err){
        console.log(err)
    }
    try{
        connection.query(createDb,(err, result)=>{
            if(err) throw err
        })
        connection.query(createTable,(err, result)=>{
            if(err) throw err
        })
    }catch(err){
        console.log(err)
    }
})

