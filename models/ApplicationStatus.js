import mongoose from "mongoose";

const applicationStatusSchema = new mongoose.Schema(
  {
    statue: {
      type: String,
      enum: ["", "Applied", "Rejected", "Hired", "UnApplied"],
      default: "",
    },
    consumer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consumer",
    },
    opportunity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Opportunity",
    },
  },
  { timestamps: true }
);

export default mongoose.model("ApplicationStatus", applicationStatusSchema);
