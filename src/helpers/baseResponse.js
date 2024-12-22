const baseResponse = (statusCode, success, message, data = null) => ({
    success,
    statusCode,
    message,
    data,
});

module.exports = baseResponse;