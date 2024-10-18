const mongoose = require('mongoose')
const { URL, NODE_ENV } = require('./server.config')

async function connectTODB(){
  
    try {
        if(NODE_ENV == "development"){
            await mongoose.connect(URL);
        }
       
    } catch (error) {
        console.log("Unable to connect to DB server" , error)
    }
}


module.exports = connectTODB;