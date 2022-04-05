const express = require('express');
const queries = require('./src/utils/createDatabase-Table')
const cors = require('cors')
const user = require('./src/routes/user')
const verifyToken = require('./src/auth/auth');
const app = express()

const path = require('path')
app.use(express.static("public"));
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express.static('./build'))


app.use(express.json());

app.use('/api', user);

app.use(cors({ credentials: true }));
const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>{
    console.log(`Server Started on port ${PORT}`)
})
