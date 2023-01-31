import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
    id:{
        type:String,
        required:[true, 'Provide a name'], 
        minlength:3, 
        maxlength:20,
        trim:true,
    },
    name:{
        type:String,
        required:[true, 'Provide a name'], 
        minlength:3, 
        maxlength:20,
        trim:true
    },
    Password:{
        type:String,
        required:[true, 'Please enter password'], 
        minlength:3, 
        maxlength:20,
        trim:true
    },
    email:{
        type:String,
        required:[true, 'Please enter the email'], 
        minlength:3, 
        maxlength:20,
        trim:true
    },
    type:{
        type:String,
        required:[true, 'Please select a type'], 
        minlength:3, 
        maxlength:20,
        trim:true
    },

})