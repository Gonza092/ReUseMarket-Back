import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";

const getAccountVerifiedByUsername = async (username: string) => {
  const user = await User.findOne({
    where: { username: username },
    attributes: ["user_id", "verified_at"],
  });

  if (!user) {
    throw generateError("No existe un usuario con ese nombre de usuario.", 404);
  }

  return user;
};

export default getAccountVerifiedByUsername;
