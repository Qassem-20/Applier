import mongoose from "mongoose";
import validator from "validator";

const consumerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide a name"],
      minlength: 3,
      maxlength: 45,
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
      required: [false, "Please enter your nationality"],
      enum: ["saudi", "foreign"],
      default: "saudi",
    },
    statue: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    university: {
      required: [false, "Provide your major"],
      type: String,
      maxlength: 50,
      trim: true,
      default: "",
    },
    major: {
      type: String,
      required: [false, "Provide your major"],
      default: "",
    },
    gpa: {
      type: String,
      required: [false, "Please provide your gpa"],
      default: "",
    },
    concentrated_major: {
      type: String,
      required: [false, "concentrated_major"],
      enum: ["", "Technical", "Engineer", "Management"],
      trim: true,
      default: "",
    },
    skills: {
      type: String,
      required: [false, "Provide at least one skill"],
      default: "",
    },
    linkedIn_profile: {
      type: String,
      minlength: 0,
      maxlength: 100,
      trim: true,
      default: "null",
    },
    experience: {
      type: String,
      required: [false, "Please enter your experience"],
      enum: ["", "less than a year", "an year", "2 years", "more than 2 years"],
      default: "",
    },
    degree: {
      type: String,
      required: [false, "Please enter your experience"],
      enum: ["", "High School", "Bachelor", "Master", "Diploma"],
      default: "",
    },
    patientApplication: [
      { type: mongoose.Schema.Types.ObjectId, ref: "PatientApplication" },
    ],
    opportunity: [{ type: mongoose.Schema.Types.ObjectId, ref: "Opportunity" }],
    applicationStatus: [
      { type: mongoose.Schema.Types.ObjectId, ref: "ApplicationStatus" },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Consumer", consumerSchema);
