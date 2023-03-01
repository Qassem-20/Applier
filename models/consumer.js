import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const consumerSchema = new mongoose.Schema(
  {
    // -activated by (id_admin)
    name: {
      type: String,
      required: [true, "Provide a name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    password: {
      type: String,
      // required:[true, 'Please enter password'],
      minlength: 6,
      select: false,
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
    },
    phone_number: {
      type: String,
      required: [true, "Please enter your phone number"],
      validate: {
        validator: validator.isMobilePhone,
        // add more instruction after testing
        message: "Please provide a valid phone number",
      },
    },
    nationality: {
      type: String,
      required: [true, "Please enter your nationality"],
      enum: ["Saudi", "foreign"],
      default: "Saudi",
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
  },
  { timestamps: true }
);

// hashing the password
consumerSchema.pre("save", async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

consumerSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

consumerSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("consumer", consumerSchema);
