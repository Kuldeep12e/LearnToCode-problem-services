const StatusCodes = require('http-status-codes')
const NotImplemented = require('../errors/notimplemented.error')
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../repositories')

const problemService  = new ProblemService(new ProblemRepository);

async function addProblem(req , res , next){
  try {
    console.log(req.body);
    const newproblem = await problemService.createProblem(req.body);
    console.log(newproblem);
    return res.status(StatusCodes.CREATED).json({
        success:true,
        message:"Success",
        error:{},
        data : newproblem,
    });

  } catch (error) {
     next(error);
  }
}


async function getProblem(req , res , next){
  try {
    const response = await problemService.getProblem(req.params.id)
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"Problem fetched with id",
        error :{},
        data : response
    })
    
  } catch (error) {
     next(error);
  }
}


async function getProblems(req , res , next){
   try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json( {
        success:true,
        message:"Successfully fetched all problem",
        error :{},
        data : response,
    })
   } catch (error) {
    next(error);
   }
}


function deleteProblem(req , res , next){

}

function updateProblem(req , res , next){


}








module.exports ={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}