import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";

const getUserById = async (user_id?: number | string) => {
  const user = await User.findOne({
    where: { user_id: user_id },
    attributes: ["user_id", "username", "email", "avatar", "bio"],
  });

  if (!user) {
    throw generateError("No hay ningún usuario con esa id", 404);
  }

  return user;
};

export default getUserById;
