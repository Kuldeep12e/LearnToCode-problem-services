const express = require('express')
const problemRouter = require('./problem.routes')
const v1router = express.Router()
//if any request come routes continue with /problem , we map to problemRouter
v1router.use('/problem' , problemRouter);

module.exports = v1router;
