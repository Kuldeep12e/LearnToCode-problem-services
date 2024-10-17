const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class InternalServerError extends BaseError{
    constructor(details){
        super("InternalServerError" , StatusCodes.InternalServerError , "something went wrong !!" , details)
    }
}

module.exports = BadRequest