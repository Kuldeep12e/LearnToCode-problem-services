const express = require('express')
const {PORT} = require('./config/server.config')
const app = express();
const apiRouter = require('./routes')
const bodyParser = require('body-parser');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utills/errorHandler');
const connectTODB = require('./config/db.config');

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

app.use(errorHandler);

app.listen(PORT , async() =>{
    console.log(`server is started at ${PORT}`);
    await connectTODB();
    console.log("Successfully connect to DB");
   
})
