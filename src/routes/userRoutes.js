const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { registerValidation, loginValidation } = require('../validations/userValidation');
const validateRequest = require('../middlewares/validateRequest')

const router = express.Router();

router.post('/register', registerValidation, validateRequest, registerUser);
router.post('/login', loginValidation, validateRequest, loginUser);

module.exports = router;