import resend from "../config/resend.config";
import CustomError from "./CustomError.util.js";

const sendEmail = expressAsyncHandler(async ({ subject, to, html }) => {
  const { data, error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to,
    subject,
    html,
  });
  if (error) {
    throw new CustomError(error.message, 502);
  }
  return data;
});

export default sendEmail;
