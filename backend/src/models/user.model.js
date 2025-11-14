import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    mobile: {
      type: Number,
      default: null,
    },
    refreshToken: {
      type: String,
      default: "",
    },
    verifyEmail: {
      type: Boolean,
      default: false,
    },
    lastLoginDate: {
      type: Date,
      default: "",
    },
    status: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
    addressDetails: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Address",
      },
    ],
    shoppingCart: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "CartProduct",
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Order",
      },
    ],
    forgotPasswordOtp: {
      type: String,
      default: null,
    },
    forgotPasswordExpiry: {
      type: Date,
      default: "",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
