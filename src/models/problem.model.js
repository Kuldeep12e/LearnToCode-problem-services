const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({
     title:{
        type:String,
        required:[true , 'Title can not empty']
     },
     description:{
        type:String,
        required:[true , 'Descriptionn can not empty']
     },
     difficulty:{
        type : String,
        enum :['easy' , 'medium' ,'hard'],
        required:[true ,'Difficuly can not be empty'],
        default : 'easy'
     },
     testCases:[
        {
            input:{
                type:String,
                required: true
            },
            output:{
                type:String,
                required:true,
            }
        }
     ],
     editorials:{
        type:String,
     },
     tags:{
        type:String
     }


})

const Problem = mongoose.model('Problem' , problemSchema);

module.exports = Problem;