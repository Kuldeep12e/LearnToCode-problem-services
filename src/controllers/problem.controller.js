const statusCode = require('http-status-codes')

function addProblem(req , res){
   return res.json(statusCode.NOT_IMPLEMENTED);
   
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