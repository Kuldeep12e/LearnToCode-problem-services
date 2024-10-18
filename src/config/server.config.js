const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    PORT : process.env.PORT || 4000,
    URL : process.env.URL,
    NODE_ENV : process.env.NODE_ENV 

}