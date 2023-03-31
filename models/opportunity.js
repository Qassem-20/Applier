import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema(
  {
    // -added by (id_company)
    job_role: {
      type: String,
      required: [true, "Please provide the job role"],
      maxlength: 20,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide the job description"],
      minlength: 3,
      maxlength: 300,
      trim: true,
    },
    skills: {
      type: String,
      required: [true, "Provide at least one skill"],
      //provide all skills for all majors
    },
    job_type: {
      type: String,
      required: [true, "Please select the job type"],
      enum: ["on-site", "remote", "hybrid"],
    },
    departments_preferred: {
      type: String,
      required: [true, "Please add the preferred departments"],
      //categorize them by (Computer/engineer/Management)
      enum: ["Technical", "Engineer", "Management"],
    },
    major_preferred: {
      type: String,
      required: [true, "Provide your major"],
    },
    availability_seats: {
      type: String,
      required: [false, "Please provide number of available seats"],
      maxlength: 5,
      trim: true,
      default:"Null",
    },
    salary: {
      type: String,
      trim: true,
      default:"None",

    },
    start_date: {
      type: String,
      required: [true, "Please enter the duration for the opportunity"],
      minlength: 1,
      maxlength: 100,

    },
    duration: {
      type: String,
      required: [true, "Please enter the duration for the opportunity"],
      enum: ["2 months", "3 months", "4 months", "6 months"],
    },
    city: {
      type: String,
      required: [true, "Please enter your location url"],
      maxlength: 25,
    },
    visibility: {
      type: String,
      required: [true, "visibility..."],
      enum: ["hidden", "shown"],
      default: "shown",
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    consumer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consumer",
    },
    applicationStatus: [
      { type: mongoose.Schema.Types.ObjectId, ref: "ApplicationStatus" },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Opportunity", opportunitySchema);
