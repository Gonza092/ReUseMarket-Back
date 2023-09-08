import { TransportOptions, createTransport } from "nodemailer";

const { SMTP_PORT, SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

const transporter = createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
} as TransportOptions);

export const sendMail = async (
  email: string,
  subject: string,
  html: string
) => {
  await transporter.sendMail({
    from: SMTP_FROM,
    to: email,
    subject: subject,
    html: html,
  });
};
