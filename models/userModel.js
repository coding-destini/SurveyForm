const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ //mongoose.Schema take Objects
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User;