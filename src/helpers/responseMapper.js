const responseMapper = {
    // General success
    success: { code: 200, message: "Request successful" },
    created: { code: 201, message: "Resource created successfully" },

    // Error
    badRequest: { code: 400, message: "Bad request" },
    unauthorized: { code: 401, message: "Unauthorized access" },
    forbidden: { code: 403, message: "Forbidden access" },
    notFound: { code: 404, message: "Resource not found" },
    internalError: { code: 500, message: "Internal server error" },

    // Special cases
    validationError: { code: 422, message: "Validation error" },
    conflict: { code: 409, message: "Conflict detected" },
};

module.exports = responseMapper;