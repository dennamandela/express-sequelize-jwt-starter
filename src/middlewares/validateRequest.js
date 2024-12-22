const { validationResult } = require('express-validator');
const { sendResponse, sendErrorResponse } = require('../helpers/responseHelper'); 

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendErrorResponse(res, 'badRequest', 'Validation error', errors.array());
    }
    next();
};

module.exports = validateRequest;