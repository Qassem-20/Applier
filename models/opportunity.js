import mongoose from 'mongoose'
import validator from 'validator'

const opportunitySchema = new mongoose.Schema({
    // -added by (id_company) 
    job_role:{
        type:String,
        required:[true, 'Please provide the job role'], 
        minlength:3, 
        maxlength:20,
        trim:true
    },
    description:{
        type:String,
        required:[true, 'Please provide the job description'], 
        minlength:3, 
        maxlength:300,
        trim:true
    },
    skills:{
        type:String,
        required:[true, 'Provide at least one skill'], 
        //provide all skills for all majors
        enum: ['']
    },
    job_type:{
        type:String,
        required:[true, 'Please select the job type'], 
        enum:['on-site','remote','hybrid']
    },
    departments_preferred:{
        type:String,
        required:[true, 'Please add the preferred departments'], 
        //categorize them by (Computer/engineer/Management)
        enum:['Technical','engineer','Management']
    },
    major_preferred:{
        type:String,
        required:[true, 'Provide your major'],
        //add all majors 
        enum: ['']
    },
    availability_seats:{
        type:String,
        required:[true, 'Please provide number of available seats'], 
        minlength:3, 
        maxlength:5,
        trim:true
    },
    salary:{
        type:String,
        minlength:3, 
        maxlength:5,
        trim:true
    },
    start_date:{
        type:Date,
        min: '2023-01-01',
        validate:{
            validator:validator.isDate,
            message:'Please provide a valid date'
        },
    },
    duration:{
        type:String,
        required:[true, 'Please enter the duration for the opportunity'],
        enum:['2 months','4 months','6 months']
    },    
    city:{        
        type: mongoose.SchemaTypes.Url,
        required:[true, 'Please enter your location url'],
        minlength:3,
        maxlength:100
    },
    visibility:{
        type:String,
        enum: ['shown', 'hidden'],
        default:['shown']
    },
    createdAt:{
        type:Date,
        min: '2023-01-01'
    }
});

export default mongoose.model('opportunity', opportunitySchema);
