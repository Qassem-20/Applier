import mongoose from 'mongoose'
import validator from 'validator'

const medicalStudentSchema = new mongoose.Schema({
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
        unique:true    
    },
    type:{
        type:String,
        enum: ['main-admin', 'sub-admin'],
        default: 'sub-admin',
    },

});

export default mongoose.model('medicalStudent', medicalStudentSchema);
