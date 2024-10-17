const express = require('express')
const v1router = require('./v1/index')
const apiRouter = express.Router();

//if any request come routes continue with /v1 , we map to v1router
apiRouter.use('/v1' , v1router)

module.exports = apiRouter;



