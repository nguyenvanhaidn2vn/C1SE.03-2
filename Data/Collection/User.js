const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const User=new Schema({
    name:{
        type:String,
        require:true,
    },
    
    phone:{
        type:Number,
        require:true,
        minlength:10,
    },
    passWord:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        default:'USER',
        enum:['USER','ADMIN'],
    },
    gender:{
         type: String, 
         require: true, 
         trim: true
    },
    avatar: {
         type: String,
         trim: true, 
         default: 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png' },
})
module.exports = mongoose.model('Users',User)