import { generateError } from "../helpers/generateError";

import { AuthUser } from "../types/registerUserInterface";
import User from "../models/userModel";
import { encrypt } from "../helpers/bcrypt.handle";
import { generate } from "randomstring";
import { sendVerificationEmail } from "../helpers/email";

const createUser = async ({ email, password, username }: AuthUser) => {
  const user = await User.findOne({
    where: { email: email },
    attributes: ["user_id"],
  });

  if (user) {
    throw generateError("Ya existe un usuario con ese email", 409);
  }

  const passwordHash = await encrypt(password);

  const verification_code = generate(12);

  const verificationLink = `https://localhost:4000/verify/${verification_code}`;

  await sendVerificationEmail(email, verificationLink);

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

  return newUser.user_id;
};

const getUserById = async (user_id: number) => {
  const result = await User.findOne({
    where: { user_id: user_id },
    attributes: ["user_id", "username", "email", "verification_code"],
  });

  if (!result) {
    throw generateError("No hay ningún usuario con esa id", 404);
  }

  return result;
};

export { getUserById, createUser };
