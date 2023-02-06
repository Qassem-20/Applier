import mongoose from 'mongoose'
import validator from 'validator'

const patientApplicationSchema = new mongoose.Schema({
    // -activated by (id_consumer)    
    symptoms:{
        type:String,
        required:[true, 'Provide a name'],
        // 
        enum:['','','',''],
        default:'none'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Company',
        required: [true, 'Please provide Consumer'],
    }, 
    /*
    allergies:{
        type:String,
        required:[true, 'Provide a name'],
        // 
        enum:['','','',''],
        default:'none'
    },
    */
},
{ timestamps: true }
);

export default mongoose.model('patientApplication', patientApplicationSchema);
