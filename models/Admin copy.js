import mongoose from "mongoose";
import validator from "validator";
const adminSchema = new mongoose.Schema(
  {
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
      lowercase: true,
      unique: true,
      index: true,
    },
    type: {
      type: String,
      required: [true, "Please provide type of the admin"],
      enum: ["true", "false"],
      default: "false",
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
      validate: {
        validator: validator.isMobilePhone,
        message: "Please provide a valid phone number",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
