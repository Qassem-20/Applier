import mongoose from 'mongoose'
import validator from 'validator'

const medicalStudentSchema = new mongoose.Schema({
    // -activated by (id_admin)    
    name:{
        type:String,
        required:[true, 'Provide a name'], 
        minlength:3, 
        maxlength:20,
        trim:true
    },
    identification_letter:{
        file: { type: Buffer, required: true },
        filename: { type: String, required: true },
        mimetype: { type: String, required: true },
        required:[true, 'Provide your identification letter from your university']
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
    nationality:{
        type:String,
        required:[true, 'Please enter your nationality'],
        enum: ['Saudi', 'foreign'],
        default: 'Saudi'
    },
    city:{
        type:String,
        required:[true, 'Please enter your city'],
        //enter the rest from this link (https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Saudi_Arabia)
        enum: ['Abha','Ad-Dilam','Al-Abwa','Al Artaweeiyah','Al Bukayriyah','Badr','Baljurashi','Bisha','Bareq','Buraydah',
        'Al Bahah','Buqaa','Dammam','Dhahran','Dhurma','Dahaban','Duba','Dumat Al-Jandal','Dawadmi','Farasan','Gatgat',
        'Gerrha','Ghawiyah',"Al-Gwei'iyyah",'Hautat Sudair','Habaala','Hajrah','Haql','','','','','','','','','','','','',]
    },
    gender:{
        type:String,
        required:[true, 'Please enter your gender'],
        enum: ['male', 'female'],
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
    statue:{
        type:String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    profile_visibility:{
        type:String,
        enum: ['shown', 'hidden'],
        default: 'shown',
    },
    main_major:{
        type:String,
        enum: ['Dentist', 'Doctor'],
        default: 'Doctor',
    },    
    specialty:{
        type:String,
        //need to questionnaire medical students
        enum: [''],
        default: '',
    },
});

export default mongoose.model('medicalStudent', medicalStudentSchema);
