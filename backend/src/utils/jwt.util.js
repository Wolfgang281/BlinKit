import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export const generateAccessToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = async (id) => {
  const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  await UserModel.findOneAndUpdate({ _id: id }, { refreshToken });
  return refreshToken;
};
