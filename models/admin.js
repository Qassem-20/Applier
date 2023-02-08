import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//you can find all validation here -> [Validator Package](https://www.npmjs.com/package/validator?activeTab=readme)

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Provide a name'], 
        minlength:3, 
        maxlength:20,
        trim:true
    },
    password:{
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
    type:{
        type:String,
        required:[true, 'Please provide type of the admin'], 
        enum: ['main-admin', 'sub-admin'],
        default: 'sub-admin',
    },
    phone:{
        type:String,
        required:[true, 'Please enter your phone number'],
        validate:{
            validator:validator.isMobilePhone,
            // add more instruction after testing
            message:'Please provide a valid phone number'
        },
    }
},
{ timestamps: true }
);

// hashing the password
adminSchema.pre('save', async function () {
    // console.log(this.modifiedPaths())
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }
)
  
adminSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    })
}
  
adminSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('admin', adminSchema);
