import mongoose from "mongoose";
import validator from "validator";

const traineeApplicationSchema = new mongoose.Schema(
  {
    // -activated by (id_consumer)
    university: {
      type: String,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    major: {
      type: String,
      required: [false, "Provide your major"],
      //add all majors
      enum: [""],
    },
    gpa: {
      type: String,
      required: [false, "Please provide your gpa"],
    },
    gpa_statue: {
      type: String,
      required: [false, "Please provide your gpa"],
      enum: ["shown", "hidden"],
      default: "shown",
    },
    concentrated_major: {
      type: String,
      required: [false, "concentrated_major"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    skills: {
      type: String,
      required: [false, "Provide at least one skill"],
      //provide all skills for all majors
      enum: [""],
    },
    /*cv: {
      file: { type: Buffer, required: true },
      filename: { type: String, required: true },
      mimetype: { type: String, required: true },
    },*/
    linkedIn_profile: {
      type: String,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    experience: {
      type: String,
      required: [false, "Please enter your experience"],
      enum: [
        "none",
        "less than a year",
        "an year",
        "2 years",
        "more than 2 years",
      ],
      default: "none",
    },
    consumer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consumer",
    },
  },
  { timestamps: true }
);

export default mongoose.model("TraineeApplication", traineeApplicationSchema);
