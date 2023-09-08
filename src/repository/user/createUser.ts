import { generate } from "randomstring";

import { generateError } from "../../helpers/generateError";
import { encrypt } from "../../helpers/bcrypt.handle";
import { sendMail } from "../../helpers/email";

import { AuthUser } from "../../types/registerUserTypes";

import User from "../../models/userModel";

const createUser = async ({ email, password, username }: AuthUser) => {
  const userEmail = await User.findOne({
    where: { email: email },
    attributes: ["user_id"],
  });

  const userUsername = await User.findOne({
    where: { username: username },
    attributes: ["user_id"],
  });

  if (userEmail) {
    throw generateError("Ya existe un usuario con ese email", 409);
  }

  if (userUsername) {
    throw generateError("Ya existe un usuario con ese username", 409);
  }

  const passwordHash = await encrypt(password);

  const verification_code = generate(64);

  const verificationLink = `http://localhost:4000/user/verify/${verification_code}`;

  await sendMail(
    email,
    "Verificación de cuenta",
    `Por favor, haz clic en el siguiente enlace para verificar tu cuenta: <a href="${verificationLink}">${verificationLink}</a>`
  );

  const newUser = await User.create(
    {
      username,
      email,
      password: passwordHash,
      verification_code,
    },
    {
      fields: ["username", "email", "password", "verification_code"],
    }
  );

  const dataUser = await User.findOne({
    where: { user_id: newUser.user_id },
    attributes: ["user_id", "username", "email", "verification_code"],
  });

  return dataUser;
};

export default createUser;
