import dotenv from "dotenv";
dotenv.config({ quiet: true });

import nodemailer from "nodemailer";

if (
  !process.env.NODEMAILER_EMAIL ||
  !process.env.NODEMAILER_PASSWORD ||
  !process.env.NODEMAILER_HOST ||
  !process.env.NODEMAILER_PORT ||
  !process.env.NODEMAILER_SECURE ||
  !process.env.NODEMAILER_SERVICE
) {
  throw new Error(
    "Please provide all nodemailer credentials (NODEMAILER_EMAIL, NODEMAILER_PASSWORD, NODEMAILER_HOST, NODEMAILER_PORT, NODEMAILER_SECURE, NODEMAILER_SERVICE) in .env file"
  );
}

const mailTransport = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  secure: process.env.NODEMAILER_SECURE,
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export default mailTransport;
