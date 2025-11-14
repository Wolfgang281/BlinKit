import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Please provide RESEND_API_KEY in .env file");
}
const resend = new Resend(process.env.RESEND_API_KEY);

export default resend;
