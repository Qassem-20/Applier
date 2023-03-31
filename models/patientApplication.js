import mongoose from "mongoose";

const patientApplicationSchema = new mongoose.Schema(
  {
    // -activated by (id_consumer)
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
