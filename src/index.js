const express = require('express')
const {PORT} = require('./config/server.config')
const app = express();
const apiRouter = require('./routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())
// if any request comes and routes start with /api , we map it to apiRouter
app.use('/api' , apiRouter);

app.get('/ping' ,(req , res) =>{
    return res.json({
        msg : "problem service is alive"
    })
})

app.listen(PORT , () =>{
    console.log(`server is started at ${PORT}`)
})
