import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";

const getUsers = async () => {
  const users = await User.findAll({
    attributes: ["user_id", "username", "email", "avatar", "bio"],
    order: [["user_id", "DESC"]],
  });

  if (!users) {
    throw generateError("No hay ningún usuario", 400);
  }

  return users;
};

export default getUsers;
