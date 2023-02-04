import mongoose from 'mongoose'
import validator from 'validator'

const consumerSchema = new mongoose.Schema({
    // -activated by (id_admin)    
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
        select: false
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
    createdAt:{
        type:Date,
        min: '2023-01-01'
    },
    phone_number:{
        type:String,
        required:[true, 'Please enter your phone number'],
        validate:{
            validator:validator.isMobilePhone,
            // add more instruction after testing
            message:'Please provide a valid phone number'
        },
    },
    nationality:{
        type:String,
        required:[true, 'Please enter your nationality'],
        enum: ['Saudi', 'foreign'],
        default: 'Saudi',
    },
    statue:{
        type:String,
        enum: ['suspend', 'unsuspend'],
        default: 'unsuspend',
    },

});

export default mongoose.model('consumer', consumerSchema);
