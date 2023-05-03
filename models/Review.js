import mongoose from "mongoose";
import validator from "validator";

const reviewSchema = new mongoose.Schema(
  {
    rate: {
      type: String,
      required: [true, "Please enter the rate"],
      enum: ["1", "2", "3", "4", "5"],
    },
    description: {
      type: String,
      required: [false, "Please provide a description"],
      maxlength: 502,
      trim: true,
    },
    statue: {
      type: String,
      enum: ["shown", "hidden"],
      default: ["shown"],
    },
    isReported: {
      type: String,
      enum: ["yes", "no"],
      default: ["no"],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    medicalStudent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedicalStudent",
    },
    consumer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consumer",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);