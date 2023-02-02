import mongoose from 'mongoose'
import validator from 'validator'

const reviewSchema = new mongoose.Schema({
    //add review by (consumer_id)
    rate:{
        type:String,
        required:[true, 'Please enter the rate'],
        enum: ['1', '2','3','4','5']
    },
    description:{
        type:String,
        required:[true, 'Please provide a description'],
        minlength:3, 
        maxlength:500,
        trim:true    
    },
    statue:{
        type:String,
        enum: ['shown', 'hidden'],
        default:['shown']
    },
    isReported:{
        type:String,
        enum: ['yes', 'no'],
        default:['no']
    },
    createdAt:{
        type:Date,
        min: '2023-01-01'
    }, 
});

export default mongoose.model('review', reviewSchema);
