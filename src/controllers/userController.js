const userService = require('../services/userService');
const { sendErrorResponse, sendResponse } = require('../helpers/responseHelper');

const registerUser = async (req, res) => {
    try {
        const result = await userService.registerUser(req.body);
        sendResponse(res, 'created', { token: result.token }, result.message);
    } catch (error) {
        sendErrorResponse(res, 'internalError', 'Failed to register user');
    }
};

const loginUser = async (req, res) => {
    try {
        const result = await userService.loginUser(req.body);
        sendResponse(res, 'success', { token: result.token }, result.message);
    } catch (error) {
        sendErrorResponse(res, 'unauthorized', 'Invalid credentials');
    }
};

module.exports = {
    registerUser,
    loginUser,
};