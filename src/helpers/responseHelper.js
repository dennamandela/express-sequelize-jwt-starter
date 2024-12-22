const baseResponse = require('./baseResponse');
const responseMapper = require('./responseMapper');

// Function to make a successful response
const sendResponse = (res, type, data = null, customMessage = null) => {
    const { code, message } = responseMapper[type] || responseMapper.internalError;
    const responseMessage = customMessage || message;
    const response = baseResponse(code, true, responseMessage, data);
    return res.status(code).json(response);
};

// Function to create an error response
const sendErrorResponse = (res, type, errorDetails = null) => {
    const { code, message } = responseMapper[type] || responseMapper.internalError;
    const responseMessage = errorDetails || message;
    const response = baseResponse(code, false, responseMessage, null);
    return res.status(code).json(response);
};

module.exports = { sendResponse, sendErrorResponse };