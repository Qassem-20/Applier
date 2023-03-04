import mongoose from "mongoose";
import validator from "validator";

//you can find all validation here -> [Validator Package](https://www.npmjs.com/package/validator?activeTab=readme)

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
    },
    type: {
      type: String,
      required: [true, "Please provide type of the admin"],
      enum: ["main-admin", "sub-admin"],
      default: "sub-admin",
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
      validate: {
        validator: validator.isMobilePhone,
        // add more instruction after testing
        message: "Please provide a valid phone number",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("admin", adminSchema);
