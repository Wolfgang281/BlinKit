import UserModel from "../../models/user.model.js";
import sendEmail from "../../utils/sendEmail.util.js";

export const registerUser = expressAsyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = await UserModel.create({ name, email, password });

  const verificationEmail = sendEmail({
    subject: "Verification Email",
    to: newUser.email,
    // html: verify
  });

  res
    .status(201)
    .json({ success: true, message: "User Registered Successfully", newUser });
});

export const loginUser = expressAsyncHandler(async (req, res, next) => {});

export const logoutUser = expressAsyncHandler(async (req, res, next) => {});

export const currentUser = expressAsyncHandler(async (req, res, next) => {});

export const updateProfile = expressAsyncHandler(async (req, res, next) => {});

export const changePassword = expressAsyncHandler(async (req, res, next) => {});

export const forgotPassword = expressAsyncHandler(async (req, res, next) => {});

export const resetPassword = expressAsyncHandler(async (req, res, next) => {});
