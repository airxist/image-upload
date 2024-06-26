const { StatusCodes } = require("http-status-codes")

const ErrorHandler = (err, req, res, next) => {
    
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "something went wrong somewhere, try again later"
    };
    
    res.status(customError.statusCode).json({ msg: customError.msg })
}


module.exports = ErrorHandler;