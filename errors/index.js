const BadRequestError = require('./bad-request');
const CustomError = require('./custom-error');
const NotFoundError = require('./not-found');
const UnathorizedError = require('./unathorized');

module.exports = {
    BadRequestError,
    CustomError,
    NotFoundError,
    UnathorizedError
}