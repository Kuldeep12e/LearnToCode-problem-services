const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError{
    constructor(resourseName , resourceValue){
        super("NotFound" , StatusCodes.NOT_FOUND , `The request resourse :  ${resourseName} with ${resourceValue} not found` , {
            resourseName,
            resourceValue
        })
    }
}

module.exports = NotFound