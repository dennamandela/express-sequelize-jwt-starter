const userService = require('../services/userService');
const { successResponse, errorResponse } = require('../utils/responseHelper');

const registerUser = async (req, res) => {
    try {
        const result = await userService.registerUser(req.body);
        successResponse(res, { token: result.token }, result.message);
    } catch (error) {
        console.error(error.message);
        errorResponse(res, error.message, 404);
    }
};

const loginUser = async (req, res) => {
    try {
        const result = await userService.loginUser(req.body);
        successResponse(res, { token: result.token }, result.message);
    } catch (error) {
        console.error(error.message);
        errorResponse(res, error.message, 400);
    }
};

module.exports = {
    registerUser,
    loginUser,
};