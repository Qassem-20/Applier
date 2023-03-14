import mongoose from "mongoose";
import validator from "validator";

const consumerSchema = new mongoose.Schema(
  {
    // -activated by (id_admin)
    name: {
      type: String,
      required: [true, "Provide a name"],
      minlength: 3,
      maxlength: 30,
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
      required: [true, "Please enter your phone number"],
    },
    nationality: {
      type: String,
      required: [true, "Please enter your nationality"],
      enum: ["saudi", "foreign"],
    },
    statue: {
      type: String,
      enum: ["suspend", "unsuspend"],
      default: "unsuspend",
    },
    suspendBy: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
      // required: [true, 'Please provide admin'],
    },
    patientApplication: [
      { type: mongoose.Schema.Types.ObjectId, ref: "PatientApplication" },
    ],
    traineeApplication: [
      { type: mongoose.Schema.Types.ObjectId, ref: "TraineeApplication" },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Consumer", consumerSchema);
