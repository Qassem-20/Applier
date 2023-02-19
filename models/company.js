import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const companySchema = new mongoose.Schema({
    organization_name:{
        type:String,
        required:[true, 'Provide an organization name'], 
        minlength:3, 
        maxlength:20,
        trim:true
    },
    register_number:{
        type:String,
        required:[true, 'Provide a register number'], 
        minlength:1, 
        maxlength:20,
        trim:true
    },
    organization_phone:{
        type:String,
        required:[true, 'Provide an organization phone'], 
        validate:{
            validator:validator.isMobilePhone,
            // add more instruction after testing
            message:'Please provide a valid phone number'
        }
    },
    organization_website:{
        type:String,
        required:[false, 'Provide an organization website'], 
        minlength:1, 
        maxlength:100,
        trim:true
    },
    organization_bio:{
        type:String,
        required:[true, 'Provide an organization bio'], 
        minlength:1, 
        maxlength:500,
        trim:true
    },
    Supervisor_name:{
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
    organization_email:{
        type:String,
        required:[true, 'Please enter the organization email'], 
        validate:{
            validator:validator.isEmail,
            message:'Please provide a valid email'
        },
        unique:true    
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
    supervisor_phone:{
        type:String,
        required:[true, 'Please enter your phone number'],
        validate:{
            validator:validator.isMobilePhone,
            // add more instruction after testing
            message:'Please provide a valid phone number'
        },
    },
    Country:{
        type:String,
        required:[true, 'Please enter your Country'],
    },
    city:{
        type:String,
        required:[true, 'Please enter your city'],
        //enter the rest from this link (https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Saudi_Arabia)
        enum: ['Abha','Ad-Dilam','Al-Abwa','Al Artaweeiyah','Al Bukayriyah','Badr','Baljurashi','Bisha','Bareq','Buraydah',
        'Al Bahah','Buqaa','Dammam','Dhahran','Dhurma','Dahaban','Duba','Dumat Al-Jandal','Dawadmi','Farasan','Gatgat',
        'Gerrha','Ghawiyah',"Al-Gwei'iyyah",'Hautat Sudair','Habaala','Hajrah','Haql','','','','','','','','','','','','',],
    },
    statue:{
        type:String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    activatedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Admin',
        required: [true, 'Please provide admin'],
    }
},
{ timestamps: true }
);

// hashing the password
companySchema.pre('save', async function () {
    // console.log(this.modifiedPaths())
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }
)
  
companySchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    })
}
  
companySchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('company', companySchema);
