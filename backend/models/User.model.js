// const { model, Schema } = require('mongoose');

// const userSchema = new Schema({
    
//     username: String,
//     password: String,
//     email: String,
//     createdAt: String
// })


// module.exports = model('User', userSchema)


import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
},
{
    timestamps: true
})


const User = mongoose.model('User', userSchema);

export default User;


