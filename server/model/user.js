const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username : {
        type : String,
        required: [true , 'username must not empty']
    },
    email : {
        type : String,
        required: [true , 'email must not empty'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
})


const Model = mongoose.model('user', User)
module.exports = Model