import { generateError } from "../../helpers/generateError";
import User from "../../models/userModel";

const deleteUser = async (user_id?: number) => {
  const user = await User.findOne({
    where: { user_id: user_id },
    attributes: ["user_id"],
  });

  if (!user) {
    throw generateError("Solo puedes borrar tu cuenta si estas logeado.", 400);
  }

  await User.destroy({
    where: { user_id: user_id },
  });

  return;
};

export default deleteUser;
