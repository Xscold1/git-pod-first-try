


const createTable = 'CREATE TABLE IF NOT EXISTS userInput(name VARCHAR(255), input1 TEXT, input2 TEXT, input3 TEXT, input4 TEXT, input5 TEXT, input6 TEXT, input7 TEXT, input8 TEXT, input9 TEXT, input10 TEXT, input11 TEXT, input12 TEXT, input13 TEXT, input14 TEXT, input15 TEXT, input16 TEXT, input17 TEXT, input18 TEXT, input19 TEXT, input20 TEXT, input21 TEXT, input22 TEXT, input23 TEXT, input24 TEXT, input25 TEXT, input26 TEXT, input27 TEXT, input28 TEXT, input29 TEXT, input30 TEXT, input31 TEXT, input32 TEXT, input33 TEXT, input34 TEXT, input35 TEXT, input36 TEXT, input37 TEXT, input38 TEXT, input39 TEXT, input40 TEXT, input41 TEXT, input42 TEXT, input43 TEXT, input44 TEXT, input45 TEXT, input46 TEXT, input47 TEXT, input48 TEXT, input49 TEXT, input50 TEXT)'

const createDb = 'CREATE DATABASE IF NOT EXISTS mockCompe'

const insertName = 'INSERT INTO userInput(name) values(?)'

const insertFirstPageInput = 'INSERT INTO userInput (input1, input2, input3, input4, input5, input6, input7, input8, input9, input10) VALUES (?,?,?,?,?,?,?,?,?,?)'

const selectAll = 'SELECT * FROM userInput WHERE name = ?'

module.exports = {
    createTable,
    createDb,
    selectAll,
    insertName,
    insertFirstPageInput
}