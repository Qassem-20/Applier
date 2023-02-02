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
    createdAt:{
        type:Date,
        min: '2023-01-01'
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
});

export default mongoose.model('patientApplication', patientApplicationSchema);
