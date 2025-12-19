import expressAsyncHandler from "express-async-handler";
import UserModel from "../../models/user.model.js";
import verifyEmailTemplate from "../../templates/verifyEmailTemplate.util.js";
import CustomError from "../../utils/CustomError.util.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/jwt.util.js";
import sendEmail from "../../utils/sendEmail.util.js";

export const registerUser = expressAsyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = await UserModel.create({ name, email, password });

  const verifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${newUser._id}`;

  const verificationEmail = sendEmail({
    subject: "Verification Email",
    to: email,
    html: verifyEmailTemplate(name, verifyEmailUrl),
    subject: "Verification Email",
  });

  res
    .status(201)
    .json({ success: true, message: "User Registered Successfully", newUser });
});

export const verifyEmail = expressAsyncHandler(async (req, res, next) => {
  const { code } = req.query;
  const user = await UserModel.findOne({ _id: code });

  if (!user) {
    return new CustomError("User Not Found", 404);
  }

  user.verifyEmail = true;
  await user.save();

  res
    .status(200)
    .json({ success: true, message: "Email Verified Successfully" });
});

export const loginUser = expressAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return new CustomError("Invalid credentials", 404);
  }

  if (!user.verifyEmail) {
    return new CustomError("Email Not Verified", 400);
  }

  if (user.status !== "active") {
    return new CustomError("Account Suspended", 400);
  }

  let isMatched = await user.comparePassword(password);

  if (!isMatched) {
    return new CustomError("Invalid credentials", 404);
  }

  const accessToken = await generateAccessToken(user._id);
  const refreshToken = await generateRefreshToken(user._id);

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN * 60 * 60 * 1000,
    })
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      success: true,
      message: "User Logged In Successfully",
      tokens: { accessToken, refreshToken },
    });
});

export const logoutUser = expressAsyncHandler(async (req, res, next) => {});

export const currentUser = expressAsyncHandler(async (req, res, next) => {});

export const updateProfile = expressAsyncHandler(async (req, res, next) => {});

export const changePassword = expressAsyncHandler(async (req, res, next) => {});

export const forgotPassword = expressAsyncHandler(async (req, res, next) => {});

export const resetPassword = expressAsyncHandler(async (req, res, next) => {});
