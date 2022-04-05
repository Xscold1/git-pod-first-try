const {mysqlPool, query} = require('../../utils/pool');
const verifyToken = require('../../auth/auth')
const {logInSchema, firstPageInput} = require('../../utils/schema')
const {insertName, selectAll} = require('../../utils/queries')

const verify = async(req,res) =>{
    const transaction = await mysqlPool.getConnection();
    try{
        let input = await logInSchema
        .validateAsync(req.body).catch((err)=>{
            throw{status: 401, message: err.message}
        })
    const {
        name: name, 
        secretPassword: secretPassword
    } = input
    console.log(secretPassword)
    if(verifyToken){
        const verifyUser = await query(insertName, [name], transaction)
        //const select = await query(selectAll, [name], transaction)
        res.send('woah')
    }
    }catch(err){
        console.log(err)
        res.json({code:500, message: 'server error'})
    }
}

module.exports = {
    verify
};