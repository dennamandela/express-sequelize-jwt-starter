const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');
const { generateToken } = require('../helpers/jwtHelper');

const registerUser = async (userData) => {
    const { firstName, lastName, email, password } = userData;

    const userExists = await userRepository.findByEmail(email);
    if(userExists) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepository.createUser({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });

    const token = generateToken(user.id);

    return { token, message: 'User registered successfully' };
};

const loginUser = async (userData) => {
    const {email, password} = userData;

    const user = await userRepository.findByEmail(email);
    if(!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const token = generateToken(user.id);

    return { token, message: 'Login successful' };
};

module.exports = {
    registerUser,
    loginUser,
};

