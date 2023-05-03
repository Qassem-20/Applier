import mongoose from "mongoose";

const patientApplicationSchema = new mongoose.Schema(
  {
    symptoms: {
      type: String,
      required: [false],
      default: "none",
    },
    consumer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consumer",
    },
  },
  { timestamps: true }
);

export default mongoose.model("PatientApplication", patientApplicationSchema);
