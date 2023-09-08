import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";

const getAccountVerifiedByUsername = async (username: string) => {
  const user = await User.findOne({
    where: { username: username },
    attributes: ["user_id", "verified_at"],
  });

  if (!user) {
    throw generateError(
      "El nombre de usuario o la contraseña no coinciden.",
      404
    );
  }

  return user;
};

export default getAccountVerifiedByUsername;
