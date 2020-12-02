const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const User = require('../../models/User.model');
const { validationRegister, validationUsername } = require('../../utils/validationRegister.module');

const { SECRET_KEY } = require('../../config');


function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    }, SECRET_KEY, { expiresIn: '1h' });
}

module.exports = {
    Mutation: {
        async login(_, { username, password }) {
            const { errors, valid } = validationUsername(username, password)
            const user = await User.findOne({ username });

            if (!valid) {
                throw new UserInputError('Ошибка', { errors });
            }

            if (!user) {
                errors.general = 'Пользователь не найден'
                throw new UserInputError('Пользователь не найден', { errors });
            }

            const match = await bcrypt.compare(password, user.password)

            if (!match) {
                errors.general = 'Неправильные учетные данные'
                throw new UserInputError('Неправильные учетные данные', { errors });
            }

            const token = generateToken(user);
            return {
                ...user._doc,
                id: user._id,
                token
            }
        },
        //resolvers have 4 option (parent, args, context, info)
        // we use only 'args'
        async register(
            _,
            {
                registerInput: { username, email, password, confirmPassword }
            }
        ) {

            //Validation User Data
            const { valid, errors } = validationRegister(username, email, password, confirmPassword)
            if (!valid) {
                throw new UserInputError('Ошибка', { errors })
            }

            //Validation User
            const user = await User.findOne({ username })
            if (user) {
                throw new UserInputError('Username exist', {
                    error: {
                        username: 'This username is already exist'
                    }
                })
            }

            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();


            const token = generateToken(res)

            return {
                ...res._doc,
                id: res._id,
                token
            }


        }
    }
}