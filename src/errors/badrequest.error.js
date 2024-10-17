const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class BadRequest extends BaseError{
    constructor(propertyName){
        super("BadRequest" , StatusCodes.BadRequest , `Invalid stucture for ${propertyName} provided` , details)
    }
}

module.exports = BadRequest