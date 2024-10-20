const {Problem} = require('../models')

class ProblemRepository {
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title:problemData.title,
                description : problemData.description,
            });

            return problem
        } catch(error) {
            console.log(error)
        }
            

    }

    async getAllProblems(){
        try {
            const problem = await Problem.find({});
            return problem;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = ProblemRepository;