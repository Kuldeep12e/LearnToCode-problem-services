const express = require('express')
const {PORT} = require('./config/server.config')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text)
app.get('/ping' ,(req , res) =>{
    return res.json({
        msg : "problem service is alive"
    })
})

app.listen(PORT , () =>{
    console.log(`server is started at ${PORT}`)
})
