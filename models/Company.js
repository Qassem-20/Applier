import mongoose from "mongoose";
import validator from "validator";

const companySchema = new mongoose.Schema(
  {
    organization_name: {
      type: String,
      required: [true, "Provide an organization name"],
      trim: true,
    },
    register_number: {
      type: String,
      required: [true, "Provide a register number"],
      trim: true,
    },
    organization_website: {
      type: String,
      required: [false, "Provide an organization website"],
      minlength: 1,
      maxlength: 100,
      trim: true,
    },
    organization_bio: {
      type: String,
      required: [true, "Provide an organization bio"],
      trim: true,
    },
    supervisor_name: {
      type: String,
      required: [true, "Provide a name"],
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
      required: [false, "Please enter your phone number"],
    },
    country: {
      type: String,
      required: [true, "Please enter your Country"],
    },
    city: {
      type: String,
      required: [false, "Please enter your city"],
      default: "",
    },
    statue: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    activatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
    },
    Opportunities: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Opportunity" },
    ],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);