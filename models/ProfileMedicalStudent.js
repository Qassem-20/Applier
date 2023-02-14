import mongoose from 'mongoose'

const ProfileMedicalStudentSchema = new mongoose.Schema({
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
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'MedicalStudent',
        required: [true, 'Please provide Medical Student'],
    }
},
{ timestamps: true }
);

export default mongoose.model('ProfileMedicalStudentSchema', ProfileMedicalStudentSchema);
