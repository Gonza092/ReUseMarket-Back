import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";

const verifyEmail = async (code: string) => {
  const user = await User.findOne({
    where: { verification_code: code },
    attributes: ["user_id", "verified_at"],
  });

  if (!user) {
    throw generateError("El código de verificación no es válido.", 404);
  }

  if (user.verified_at) {
    throw generateError("Esta cuenta ya ha sido verificada.", 400);
  }

  await User.update(
    { verified_at: new Date() },
    { where: { user_id: user.user_id } }
  );

  return;
};

export default verifyEmail;
