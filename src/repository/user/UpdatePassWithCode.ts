import User from "../../models/userModel";
import { generateError } from "../../helpers/generateError";
import { encrypt } from "../../helpers/bcryptHandle";

const updatePassWithCode = async (
  recoverPassCode: string,
  password: string
) => {
  const user = await User.findOne({
    where: { recover_pass_code: recoverPassCode },
    attributes: ["user_id"],
  });

  if (!user) {
    throw generateError(
      "El código de recuperación de contraseña no es válido.",
      404
    );
  }

  const passwordHash = await encrypt(password);

  await User.update(
    { recover_pass_code: null, password: passwordHash },
    { where: { recover_pass_code: recoverPassCode } }
  );

  return;
};

export default updatePassWithCode;
