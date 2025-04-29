import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "employee"],
    default: "employee",
  },
  department: {
    type: String,
    required: true,
  },
  employeeId: {
    type: Number,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationOTP: {
    type: String,
    default: null,
  },
  otpExpires: {
    type: Date,
    default: null,
  },
  passwordResetCode: String,
  resetCodeExpires: Date,
})

const User = mongoose.model("User", userSchema)

export default User

