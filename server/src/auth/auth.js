const { sendStatus } = require('express/lib/response');
const jwt = require('jsonwebtoken');

const secretKey = 'secret';

const auth = (req,res,next) => {
    const secretPass = req.body.secretPassword
    const user = req.body.name
    if(secretPass != secretKey){
        return res.json({code:400, message: 'secretpassword do not match'})
    }

    const signInToken = jwt.sign(user, secretKey)
    const token = signInToken
    console.log(token)

    if(!token){
        return res.json({code:402})
    }
    try{
        const decoded = jwt.verify(token, secretKey)
            req.user = decoded
            next()
    }catch(err){
        return res.json({code:401})
    }
}

    
        


module.exports = auth