import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'asdsa2d@email',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Susan',
        email: 'asdsa1d@email',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'John',
        email: 'asdsad3@email',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users