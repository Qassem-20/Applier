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
      required: [true, "Please enter your city"],
      /*enter the rest from this link (https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Saudi_Arabia)
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
      ],*/
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
    Opportunities: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Opportunity" },
    ],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);
