import mongoose from "mongoose";
import validator from "validator";

const companySchema = new mongoose.Schema(
  {
    organization_name: {
      type: String,
      required: [true, "Provide an organization name"],
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    register_number: {
      type: String,
      required: [true, "Provide a register number"],
      minlength: 1,
      maxlength: 20,
      trim: true,
    },
    organization_phone: {
      type: String,
      required: [true, "Provide an organization phone"],
      validate: {
        validator: validator.isMobilePhone,
        // add more instruction after testing
        message: "Please provide a valid phone number",
      },
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
      minlength: 1,
      maxlength: 500,
      trim: true,
    },
    supervisor_name: {
      type: String,
      required: [true, "Provide a name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      minlength: 6,
    },
    organization_email: {
      type: String,
      required: [true, "Please enter the organization email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      lowercase: true,
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
    },
    supervisor_phone: {
      type: String,
      required: [true, "Please enter your phone number"],
      validate: {
        validator: validator.isMobilePhone,
        // add more instruction after testing
        message: "Please provide a valid phone number",
      },
    },
    country: {
      type: String,
      required: [true, "Please enter your Country"],
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
    statue: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    activatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
      // required: [true, 'Please provide admin'],
    },
  },
  { timestamps: true }
);

export default mongoose.model("company", companySchema);
