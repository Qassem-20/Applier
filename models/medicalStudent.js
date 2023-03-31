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
      required: [true, "Please enter your nationality"],
      enum: ["Saudi", "Foreign"],
      default: "Saudi",
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
      //enum: [""],
      //default: "",
    },
    statue: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    reviews: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Review" }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("MedicalStudent", MedicalStudentSchema);
