const { verifyToken } = require('../helpers/jwtHelper');
const { sendResponse, sendErrorResponse } = require('../helpers/responseHelper');

const protect = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    if (!token) {
        return sendErrorResponse(res, 'unauthorized', 'No Token, authorization denied');
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded.userId;
        next();
    } catch (error) {
        return sendErrorResponse(res, 'unauthorized', 'Token is not valid');
    }
};

module.exports = { protect };