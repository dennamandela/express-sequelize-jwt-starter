const { verifyToken } = require('../utils/jwtHelper');

const protect = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No Token, authorization denied' });
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = { protect };