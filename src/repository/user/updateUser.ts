import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";
import { encrypt, verified } from "../../helpers/bcryptHandle";

const updateUser = async (
  userId: number,
  newUsername: string,
  oldPassword: string,
  newPassword: string,
  newAvatar: string,
  newBio: string
) => {
  let userUsername;

  if (newUsername) {
    userUsername = await User.findOne({
      where: { username: newUsername },
      attributes: ["user_id"],
    });
  }

  if (userUsername) {
    throw generateError(
      "El nombre de usuario no esta disponible, escoja otro.",
      404
    );
  }

  const user = await User.findOne({
    where: { user_id: userId },
    attributes: ["user_id", "password"],
  });

  let passwordHash;

  if (newPassword) {
    const isPasswordValid = await verified(oldPassword, user!.password);

    if (!isPasswordValid) {
      throw generateError(
        "Debes introducir tu contraseña actual para poder cambiarla por una nueva.",
        400
      );
    } else {
      passwordHash = await encrypt(newPassword);
    }
  }

  await User.update(
    {
      username: newUsername,
      password: passwordHash,
      avatar: newAvatar,
      bio: newBio,
    },
    { where: { user_id: userId } }
  );

  const userUpdate = await User.findOne({
    where: { user_id: userId },
    attributes: ["user_id", "username", "avatar", "bio"],
  });

  return userUpdate;
};

export default updateUser;
