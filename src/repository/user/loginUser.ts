import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";
import { verified } from "../../helpers/bcrypt.handle";
import { generateToken } from "../../helpers/jwt.handle";

const loginUser = async (username: string, password: string) => {
  const user = await User.findOne({
    where: { username: username },
    attributes: ["user_id", "password"],
  });

  if (!user) {
    throw generateError(
      "El nombre de usuario o la contraseña no coinciden.",
      404
    );
  }

  const validPassword = await verified(password, user.password);

  if (!validPassword) {
    throw generateError(
      "El nombre de usuario o la contraseña no coinciden.",
      404
    );
  }

  const token = generateToken(user.user_id);

  return token;
};

export default loginUser;
