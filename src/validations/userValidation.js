const { body } = require('express-validator');

const registerValidation = [
    body('firstName').notEmpty().withMessage('First Name is required'),
    body('lastName').notEmpty().withMessage('Last Name is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

const loginValidation = [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
];

module.exports = {
    registerValidation,
    loginValidation,
};