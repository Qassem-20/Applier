import mongoose from 'mongoose'
import validator from 'validator'
//you can find all validation here -> [Validator Package](https://www.npmjs.com/package/validator?activeTab=readme)

const adminSchema = new mongoose.Schema({
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
        minlength:6, 
        maxlength:20,
        trim:true
    },
    email:{
        type:String,
        required:[true, 'Please enter the email'], 
        validate:{
            validator:validator.isEmail,
            message:'Please provide a valid email'
        },
        unique:true    
    },
    type:{
        type:String,
        enum: ['main-admin', 'sub-admin'],
        default: 'sub-admin',
    },

});

export default mongoose.model('admin', adminSchema);
