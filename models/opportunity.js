import mongoose from "mongoose";
import validator from "validator";

const opportunitySchema = new mongoose.Schema(
  {
    // -added by (id_company)
    job_role: {
      type: String,
      required: [true, "Please provide the job role"],
      minlength: 3,
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
      required: [true, "Please provide number of available seats"],
      minlength: 1,
      maxlength: 5,
      trim: true,
    },
    salary: {
      type: String,
      minlength: 1,
      maxlength: 5,
      trim: true,
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
      minlength: 3,
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
    traineeApplication: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "traineeApplication",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Opportunity", opportunitySchema);
