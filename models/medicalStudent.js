import mongoose from "mongoose";
import validator from "validator";

const MedicalStudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide a name"],
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
    phone_number: {
      type: String,
      required: [true, "Please enter your phone number"],
    },

    nationality: {
      type: String,
      required: [false, "Please enter your nationality"],
      enum: ["Saudi", "Foreign"],
      default: "Saudi",
    },
    city: {
      type: String,
      required: [false, "Please enter your city"],
      default: "",
    },
    gender: {
      type: String,
      required: [false, "Please enter your gender"],
      enum: ["", "male", "female"],
      default: "",
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
      maxlength: 30,
    },
    statue: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

export default mongoose.model("MedicalStudent", MedicalStudentSchema);
