const StatusCodes = require('http-status-codes')
const NotImplemented = require('../errors/notimplemented.error')

function addProblem(req , res , next){
  try {

    throw new NotImplemented('addProblem');
    
  } catch (error) {
     next(error);
  }

}




function getProblem(req , res){
  
}


function getProblems(req , res){
  return res.json({
    mgs :"this is a get response"
  })
}


function deleteProblem(req , res){

}

function updateProblem(req , res){


}








module.exports ={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}