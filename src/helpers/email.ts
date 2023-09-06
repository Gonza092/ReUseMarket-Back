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

const sendVerificationEmail = async (
  email: string,
  verificationLink: string
) => {
  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: email,
      subject: "Verificación de cuenta",
      html: `Por favor, haz clic en el siguiente enlace para verificar tu cuenta: <a href="${verificationLink}">${verificationLink}</a>`,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error al enviar el correo electrónico de verificación");
  }
};

export { sendVerificationEmail };
