import mongoose from "mongoose";
import validator from "validator";

const consumerSchema = new mongoose.Schema(
  {
    // -activated by (id_admin)
    name: {
      type: String,
      required: [true, "Provide a name"],
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
      lowercase: true,
      index: true,
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
    nationality: {
      type: String,
      required: [true, "Please enter your nationality"],
      enum: ["saudi", "foreign"],
    },
    statue: {
      type: String,
      enum: ["suspend", "unsuspend"],
      default: "unsuspend",
    },
    suspendBy: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
      // required: [true, 'Please provide admin'],
    },
    university: {
      required: [false, "Provide your major"],
      type: String,
      minlength: 2,
      maxlength: 50,
      trim: true,
    },
    major: {
      type: String,
      required: [false, "Provide your major"],
      //add all majors
      //enum: [""],
    },
    gpa: {
      type: String,
      required: [false, "Please provide your gpa"],
    },

    concentrated_major: {
      type: String,
      required: [false, "concentrated_major"],
      minlength: 0,
      maxlength: 20,
      trim: true,
    },
    skills: {
      type: String,
      required: [false, "Provide at least one skill"],
      //provide all skills for all majors
      //enum: [""],
    },
    /*cv: {
      file: { type: Buffer, required: true },
      filename: { type: String, required: true },
      mimetype: { type: String, required: true },
    },*/
    linkedIn_profile: {
      type: String,
      minlength: 0,
      maxlength: 100,
      trim: true,
    },
    experience: {
      type: String,
      required: [false, "Please enter your experience"],
      enum: [
        "none",
        "less than a year",
        "an year",
        "2 years",
        "more than 2 years",
      ],
      default: "none",
    },
    degree:{
      type: String,
      required: [false, "Please enter your experience"],
      enum: [
        "High School",
        "Bachelor",
        "Master",
        "Diploma",
      ],
    },
    patientApplication: [
      { type: mongoose.Schema.Types.ObjectId, ref: "PatientApplication" },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Consumer", consumerSchema);
