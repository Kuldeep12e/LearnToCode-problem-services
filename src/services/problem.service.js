const sanitizeMarkdown = require('../utills/markdownSanitizer')
class ProblemService {
    constructor(problemRepository){
        this.problemRepository = problemRepository
    }

    async createProblem(problemData){
        //1. Sanitize the markdowon for markdown
        try {
            console.log(problemData);
            problemData.description = sanitizeMarkdown(problemData.description)
            console.log(problemData.description);
            const problem = this.problemRepository.createProblem(problemData)
            console.log(problem);
            return problem
            
        } catch (error) {
            
        }
    }

    async getAllProblems(){

            const problems = await this.problemRepository.getAllProblems();
            return problems;
      
    }

    async getProblem(id){
        const problem = await this.problemRepository.getProblem(id);
        return problem;
    }
}


module.exports = ProblemService