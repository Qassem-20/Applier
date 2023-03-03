import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const MedicalStudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide a name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    /*identification_letter:{
        file: { type: Buffer, required: true },
        filename: { type: String, required: true },
        mimetype: { type: String, required: true },
        required:[true, 'Provide your identification letter from your university']
    },*/
    password: {
      type: String,
      required: [true, "Please enter password"],
      minlength: 6,
      select: false,
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
    },
    phone_number: {
      type: String,
      required: [true, "Please enter your phone number"],
      validate: {
        validator: validator.isMobilePhone,
        // add more instruction after testing
        message: "Please provide a valid phone number",
      },
    },

    nationality: {
      type: String,
      required: [true, "Please enter your nationality"],
      enum: ["Saudi", "Foreign"],
      default: "Saudi",
    },
    city: {
      type: String,
      required: [true, "Please enter your city"],
      //enter the rest from this link (https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Saudi_Arabia)
      enum: [
        "Abha",
        "Ad-Dilam",
        "Al-Abwa",
        "Al Artaweeiyah",
        "Al Bukayriyah",
        "Badr",
        "Baljurashi",
        "Bisha",
        "Bareq",
        "Buraydah",
        "Al Bahah",
        "Buqaa",
        "Dammam",
        "Dhahran",
        "Dhurma",
        "Dahaban",
        "Duba",
        "Dumat Al-Jandal",
        "Dawadmi",
        "Farasan",
        "Gatgat",
        "Gerrha",
        "Ghawiyah",
        "Al-Gwei'iyyah",
        "Hautat Sudair",
        "Habaala",
        "Hajrah",
        "Haql",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    gender: {
      type: String,
      required: [true, "Please enter your gender"],
      enum: ["male", "female"],
    },
    profile_visibility: {
      type: String,
      enum: ["shown", "hidden"],
      default: "hidden",
    },
    main_major: {
      type: String,
      enum: ["Dentist", "Doctor"],
      default: "Doctor",
    },
    specialty: {
      type: String,
      //need to questionnaire medical students
      enum: [""],
      default: "",
    },
    statue: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    activatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
      required: [false, "Please provide admin"],
    },
  },
  { timestamps: true }
);

// hashing the password
MedicalStudentSchema.pre("save", async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

MedicalStudentSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

MedicalStudentSchema.methods.comparePassword = async function (
  candidatePassword
) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("medicalStudent", MedicalStudentSchema);
