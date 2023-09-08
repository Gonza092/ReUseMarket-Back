import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";

import { generate } from "randomstring";
import { sendMail } from "../../helpers/email";

const recoverPass = async (email: string) => {
  const user = await User.findOne({
    where: { email: email },
    attributes: ["user_id"],
  });

  if (!user) {
    throw generateError("no existe ningún usuario con ese email.", 404);
  }

  const recoverPassCode = generate(64);

  await User.update(
    { recover_pass_code: recoverPassCode },
    { where: { email: email } }
  );

  await sendMail(
    email,
    "Recuperación de contraseña.",
    `introduce el siguiente código en nuestra aplicación para poder crear una nueva contraseña: ${recoverPassCode}`
  );

  return;
};

export default recoverPass;
