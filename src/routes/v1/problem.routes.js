const express = require('express')

const {ProblemContoller} = require('../../controllers/index')

const problemRouter = express.Router()

//if any request come routes continue with / , we map to these router
problemRouter.get('/:id' , ProblemContoller.getProblem);
problemRouter.get('/' , ProblemContoller.getProblems);
problemRouter.post('/' , ProblemContoller.addProblem);
problemRouter.delete('/:id' , ProblemContoller.deleteProblem)
problemRouter.put('/:id' , ProblemContoller.updateProblem)


module.exports = problemRouter;